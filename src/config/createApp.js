const express = require('express');
const policyRouter = require('../modules/policy'); // 폴더 require => index.js

function createApp() {
  const app = express();

  app.use(express.json());

  app.get('/health', (req, res) => res.status(200).send('ok'));

  app.use('/api/policy', policyRouter);

  // 404 (API만)
  app.use('/api', (req, res) => {
    res.status(404).json({ code: 'NOT_FOUND', message: '존재하지 않는 API입니다.' });
  });

  // 공통 에러 핸들러
  app.use((err, req, res, next) => {
    const status = err.status || 500;
    const code = err.code || 'INTERNAL_ERROR';
    const message = err.message || '서버 에러입니다.';
    res.status(status).json({ code, message });
  });

  return app;
}

module.exports = { createApp };