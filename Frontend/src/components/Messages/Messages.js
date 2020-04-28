import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';

import Message from './Message/Message';

export default function Messages({ messages, client }) {
  return (
    <div>
      <ScrollToBottom className="messages" >
        {messages.map((message, i) => <div key={i}><Message message={message} client={client}/></div>)}
      </ScrollToBottom>
    </div>
  )
}
