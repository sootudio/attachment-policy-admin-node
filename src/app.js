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

// 존재하지 않는 API 경로 처리 (404)
app.use('/api', (req, res) => {
  res.status(404).json({ code: 'NOT_FOUND', message: '존재하지 않는 API입니다.' });
});

// 공통 에러 핸들러 (Spring의 @ControllerAdvice 느낌)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const code = err.code || 'INTERNAL_ERROR';
  const message = err.message || '서버 에러입니다.';
  res.status(status).json({ code, message });
});
