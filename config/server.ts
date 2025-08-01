// path: ./config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  app: {
    // Si existe APP_KEYS en tu entorno, lo lee; si no, usa este array de respaldo
    keys: env.array('APP_KEYS', [
      'localKey1ChangeMe!',
      'localKey2ChangeMe!',
      'localKey3ChangeMe!',
      'localKey4ChangeMe!',
    ]),
  },
});




