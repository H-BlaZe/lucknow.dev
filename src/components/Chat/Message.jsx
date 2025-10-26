import React from 'react';
import { formatTime } from '../../utils/helpers';

const Message = ({ text, isUser, time }) => {
  return (
    <div className={`chat-message ${isUser ? 'chat-message-user' : 'chat-message-bot'}`}>
      <div className={`chat-message-avatar ${isUser ? 'chat-avatar-user' : 'chat-avatar-bot'}`}>
        {isUser ? '👤' : '🤖'}
      </div>
      <div className="chat-message-content">
        <div className={`chat-bubble ${isUser ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <p className="chat-time">{formatTime(time)}</p>
      </div>
    </div>
  );
};

export default Message;
