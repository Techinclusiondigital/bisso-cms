// path: config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    // Le pasamos directamente la URL completa de la DB
    connection: env('DATABASE_URL'),
    debug: false,
  },
});
