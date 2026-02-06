const express = require('express');

const app = express();

const policyRouter = require('./routes/policy.routes');

// JSON 바디 파싱 (나중에 POST/PATCH에 필요)
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('ok');
});

app.use('/api/policy', policyRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server on ${port}`);
});

