export default function ListItem({ data, serverData }) {

  return (
    <li className={data.name === serverData.name ? 'sent' : 'received'}>
      <span className="profile">
        <span className="user">{serverData.name}</span>
        <img src="/logo.png" alt="any" />
      </span>
      <span className="message">{serverData.msg}</span>
      <span className="time">{serverData.time}</span>
    </li>
  );
}

export const a = 3;