import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import { sendMessageToAPI } from '../../utils/helpers';
import './Chat.css';

const Chat = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Namaste! How can I assist you today?', isUser: false, time: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      text: inputValue,
      isUser: true,
      time: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const response = await sendMessageToAPI(inputValue);
    
    setIsTyping(false);
    setMessages(prev => [...prev, {
      text: response,
      isUser: false,
      time: new Date()
    }]);
  };

  return (
    <>
      {chatOpen && (
        <div className="chat-container">
          <div className="chat-wrapper">
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">🤖</div>
                <div>
                  <h3 className="chat-bot-name">NAWAB AI</h3>
                  <p className="chat-bot-status">Always here to help</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="chat-close">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="chat-messages" ref={chatBoxRef}>
              {messages.map((msg, idx) => (
                <Message key={idx} {...msg} />
              ))}
              
              {isTyping && (
                <div className="chat-message chat-message-bot">
                  <div className="chat-message-avatar chat-avatar-bot">🤖</div>
                  <div className="chat-message-content">
                    <div className="chat-bubble chat-bubble-bot">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="chat-info">
              <i className="fas fa-info-circle"></i>
              <span>NO CONVERSATION CONTEXT RETAINED</span>
            </div>

            <form onSubmit={handleSubmit} className="chat-form">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="chat-input"
                autoComplete="off"
              />
              <button type="submit" className="chat-send">
                <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      <button onClick={() => setChatOpen(!chatOpen)} className="chat-button">
        💬
      </button>
    </>
  );
};

export default Chat;
