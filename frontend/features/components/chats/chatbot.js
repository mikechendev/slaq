import { config } from 'dotenv';
config();

import { Configuration, OpenAIApi } from 'openai';
import React, { useState } from 'react';

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

// openai
//   .createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: 'Hello, how are you?' }],
//   })
//   .then((response) => {
//     console.log(response.data.choices[0].message.content);
//   });

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
};

return <div></div>;
