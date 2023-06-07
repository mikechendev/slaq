import axios from 'axios';

const apiKey = process.env.OPENAI_API_KEY;

const client = axios.create({
  headers: {
    Authorization: 'Bearer ' + apiKey,
  },
});

const params = {
  model: 'gpt-3.5-turbo',
  prompt: 'How are you?',
  temperature: 0,
  max_tokens: 10,
};

client
  .post('https://api.openai.com/v1/completions', params)
  .then((result) => {
    console.log(result.data.choices[0].text);
  })
  .catch((error) => {
    console.log(error);
  });
