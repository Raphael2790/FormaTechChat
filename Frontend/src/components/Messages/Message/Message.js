import React from 'react';

import './Message.css';

export default function Message({ message:{text,user}, client }) {
  let isSentByCurrentUser = false;

  const trimmedName = client.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  console.log(trimmedName, user);

  return (
    isSentByCurrentUser
    ?(
      <div className="messageContainer justifyEnd">
        <p className="sentText pr-10">{trimmedName}</p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{text}</p>
        </div>
      </div>
    )
    :(
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{text}</p>
        </div>
        <p className="sentTextText pl-10">{user}</p>
      </div>
    )
  )
}
