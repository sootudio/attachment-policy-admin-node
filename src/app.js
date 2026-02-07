require('dotenv').config();

const { validateEnv } = require('./config/env');
const { createApp } = require('./config/createApp');

validateEnv();

const app = createApp();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server on ${port}`);
});
