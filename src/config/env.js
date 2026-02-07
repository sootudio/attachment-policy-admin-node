function validateEnv() {
  const required = ['DB_HOST', 'DB_PORT', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'];
  for (const k of required) {
    if (!process.env[k]) throw new Error(`Missing env: ${k}`);
  }

  // Java 과제 DB 보호 (절대 3306 금지)
  if (String(process.env.DB_PORT) === '3306') {
    throw new Error('Safety guard: DB_PORT=3306 is forbidden (Java assignment DB)');
  }
}

module.exports = { validateEnv };