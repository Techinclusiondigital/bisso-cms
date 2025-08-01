// path: ./config/database.js
module.exports = ({ env }) => {
  // ¿Estamos en SQLite (desarrollo) o usando DATABASE_URL?
  const isSqlite = env('DATABASE_CLIENT', 'sqlite') === 'sqlite';

  return {
    connection: {
      client: env('DATABASE_CLIENT', isSqlite ? 'sqlite' : 'postgres'),
      // Para SQLite necesitamos un objeto { filename: '...' }
      // Para Postgres le pasamos la URL completa
      connection: isSqlite
        ? { filename: env('DATABASE_FILENAME', '.tmp/data.db') }
        : env('DATABASE_URL'),
      // Solo para SQLite
      useNullAsDefault: isSqlite,
      debug: false,
    },
  };
};
