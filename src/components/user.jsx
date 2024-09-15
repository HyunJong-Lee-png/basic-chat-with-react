console.log('유저컨테이너');

export default function UserContainer({ data, setData }) {

  return (
    <div className="user-container">
      <label htmlFor="nickname">대화명</label>
      <input type="text" id="nickname" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />
    </div>

  );
}