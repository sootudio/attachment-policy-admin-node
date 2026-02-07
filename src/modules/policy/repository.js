const { pool } = require('../../db/pool');

exports.findFixedExtensions = async () => {
  const [rows] = await pool.query(
    'SELECT extension, blocked FROM fixed_extension ORDER BY extension ASC'
  );
  return rows;
};
