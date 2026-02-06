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
  res.json([]);
});

module.exports = router;