// path: config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),               // que escuche en todas las interfaces
  port: env.int('PORT', 1337),               // usa process.env.PORT o 1337 por defecto
  app: {
    keys: env.array('APP_KEYS', [
      'keya', 'keyb', 'keyc', 'keyd'
    ]),
  },
});
