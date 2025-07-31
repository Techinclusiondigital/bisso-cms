// path: bisso-cms/config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env
      .array('APP_KEYS', [
        // estos valores sólo se usan si NO encuentras APP_KEYS en env
        'replace_me_with_a_long_random_string_1',
        'replace_me_with_a_long_random_string_2',
        'replace_me_with_a_long_random_string_3',
        'replace_me_with_a_long_random_string_4',
      ]),
  },
});

