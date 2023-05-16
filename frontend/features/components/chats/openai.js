import { config } from 'dotenv';
config();

import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

openai
  .createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Hello, how are you?' }],
  })
  .then((response) => {
    console.log(response.data.choices[0].message.content);
  });
