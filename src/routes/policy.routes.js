const { apiError } = require('../utils/errors');
const express = require('express');
const router = express.Router();

// TODO: DB 붙이기 전, 라우팅 연결 확인용 스텁
router.get('/fixed-extensions', (req, res) => {
  res.json([
    { extension: 'exe', blocked: true },
    { extension: 'bat', blocked: true },
  ]);
});

router.get('/custom-extensions', (req, res) => {
  // 테스트용: 쿼리로 error=1 넣으면 400 던지기
  if (req.query.error === '1') throw apiError(400, 'INVALID_REQUEST', '테스트 에러');
  res.json([]);
});


module.exports = router;