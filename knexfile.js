module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/honestcrm',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/honestcrm',
  },
};