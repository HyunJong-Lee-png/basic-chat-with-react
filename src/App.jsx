import { useEffect, useRef, useState } from 'react'
import DisplayContainer from './components/display'
import InputContainer from './components/input'
import UserContainer from './components/user'
import './style.css'
import io from 'socket.io-client'

const socket = io('http://localhost:3333');

function App() {
  const [data, setData] = useState({ name: '', msg: '' });
  const [listItem, setListItem] = useState([]);
  const input = useRef('');
  console.log('app')

  useEffect(() => {
    socket.on('chatting', (serverData) => {
      console.log('클라이언트가 메세지를 받았습니다.');
      const copy = [...listItem];
      copy.push({ data, serverData })
      console.log('copy', '\n', copy);
      setListItem(copy);
    });


  }, [data, listItem])

  const onClick = () => {

    socket.emit('chatting', { ...data });
    input.current.value = '';
    input.current.focus();
  }

  useEffect(() => {
    const transferMSG = (e) => {
      if (e.key === 'Enter') {
        socket.emit('chatting', { ...data });
        e.target.value = '';
        e.target.focus();
      }
    };
    input.current.addEventListener('keypress', transferMSG)
    return () => {
      input.current.removeEventListener('keypress', transferMSG);
    }
  }, [data, listItem])


  return (
    <>
      <div className="wrapper">
        <UserContainer data={data} setData={setData} />
        <DisplayContainer listItem={listItem} />
        <InputContainer data={data} setData={setData} onClick={onClick} inputRef={input} />
      </div>
    </>
  )
}

export default App
