module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  // Render te indicará qué puerto usar en la variable PORT
  port: env.int('PORT', 1337),
  app: {
    // Lee las claves de la variable de entorno APP_KEYS
    keys: env.array('APP_KEYS'),
  },
});

