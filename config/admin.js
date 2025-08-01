// path: ./config/admin.js
module.exports = ({ env }) => ({
  // Configuración del plugin de API Tokens:
  apiToken: {
    salt: env('API_TOKEN_SALT', 'tz85/mGLia8jyPhizJ8mhA=='),
  },
  // Configuración del JWT interno del Admin Panel:
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'nXthY9anDiSTXWfG8pVL0w=='),
  },
});

