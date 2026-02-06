const express = require('express');

const app = express();

// JSON 바디 파싱 (나중에 POST/PATCH에 필요)
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('ok');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server on ${port}`);
});
