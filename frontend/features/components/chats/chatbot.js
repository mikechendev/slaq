import { config } from 'dotenv';
config();

import { Configuration, OpenAIApi } from 'openai';
import readline from 'readline';
import React, { useState } from 'react';

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

// const userInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// userInterface.prompt();
// userInterface.on('line', async (input) => {
//   const res = await openai.createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: input }],
//   });
//   console.log(res.data.choices[0].message.content);
//   userInterface.prompt();
// });

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    setMessages([...messages, { text: inputValue, user: true }]);
    setInputValue('');
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
