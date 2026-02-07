const service = require('./service');
const { asyncHandler } = require('../../utils/asyncHandler');

exports.getFixedExtensions = asyncHandler(async (req, res) => {
  res.json(await service.listFixedExtensions());
});

exports.getCustomExtensions = asyncHandler(async (req, res) => {
  res.json(await service.listCustomExtensions(req.query));
});