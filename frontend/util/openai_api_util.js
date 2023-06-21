const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

// setup express

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for api

app.post('/chatbot', async (req, res) => {
  const { message } = req.body;

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    message: [{ role: 'user', content: `${message}` }],
    temperature: 0,
    max_tokens: 10,
  });

  res.send(completion.data.choices[0].text);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
