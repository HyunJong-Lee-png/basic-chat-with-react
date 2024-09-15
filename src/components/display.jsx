import { memo } from "react";
import {default as ListItem} from "./list-item";
const DisplayContainer = ({ listItem }) => {
  console.log('display');

  return (

    <div className="display-container">
      <ul className="chatting-list">
        {listItem.map((list) => {
          console.log(list.serverData)
          return <ListItem key={list.serverData.id} {...list} />
        })}
      </ul>
    </div>
  );
}

export default memo(DisplayContainer);