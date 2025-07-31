// path: bisso-cms/config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),         // escucha en todas las IPs
  port: env.int('PORT', 1338),         // puerto por defecto
  app: {
    // Aquí van tus APP_KEYS:
    keys: env.array('APP_KEYS', [
      'replace_me_with_a_long_random_string_1',
      'replace_me_with_a_long_random_string_2',
      'replace_me_with_a_long_random_string_3',
      'replace_me_with_a_long_random_string_4',
    ]),
  },
});
