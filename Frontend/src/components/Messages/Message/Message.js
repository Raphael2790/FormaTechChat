import React from 'react';

import './Message.css';

export default function Message({ message:{text,user}, client }) {
  const now = new Date();

  const timeStamp = {
    year:now.getFullYear(),
    month:now.getMonth(),
    day:now.getDate(),
    hours:now.getHours(),
    minutes:now.getMinutes(),
  }

  const dateStamp = `${timeStamp.day}/${timeStamp.month < 10?`0${timeStamp.month}`:timeStamp.month}/${timeStamp.year}`;

  const hourStamp = `${timeStamp.hours}:${timeStamp.minutes}`

  let isSentByCurrentUser = false;

  const trimmedName = client.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
    ?(
      <div className="messageContainer justifyEnd">
        <p className="sentText pr-10">{dateStamp}-{trimmedName}-{hourStamp}</p>
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
        <p className="sentTextText pl-10">{dateStamp}-{user}-{hourStamp}</p>
      </div>
    )
  )
}
