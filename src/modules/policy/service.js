const repo = require('./repository');
const { apiError } = require('../../utils/errors');

exports.listFixedExtensions = async () => {
  const rows = await repo.findFixedExtensions();
  return rows.map(r => ({ extension: r.extension, blocked: !!r.blocked }));
};

exports.listCustomExtensions = async (query) => {
  if (query.error === '1') throw apiError(400, 'INVALID_REQUEST', '테스트 에러');
  return []; // 임시로 스텁
};