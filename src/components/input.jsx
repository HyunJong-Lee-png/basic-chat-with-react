
export default function InputContainer({ data, setData, onClick, inputRef }) {


  return (

    <div className="input-container">
      <span>
        <input ref={inputRef} type="text" className="chatting-input" defaultValue={''} onChange={(e) => setData({ ...data, msg: e.target.value })} required />
        <button className="send-button" onClick={onClick}>전송</button>
      </span>
    </div>
  );
}