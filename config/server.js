// <<< DEBUG INICIO >>>
console.log('>>> ENV.APP_KEYS:', process.env.APP_KEYS);
console.log('>>> ENV.JWT_SECRET:', process.env.JWT_SECRET);
console.log('>>> process.env:', Object.keys(process.env).filter(k => /APP_KEYS|SECRET/.test(k)));
// <<< DEBUG FIN >>>

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS', [
      'replace_me_with_a_long_random_string_1',
      'replace_me_with_a_long_random_string_2',
      'replace_me_with_a_long_random_string_3',
      'replace_me_with_a_long_random_string_4',
    ]),
  },
});

