// path: ./config/plugins.js
module.exports = ({ env }) => ({
  // Plugin Users & Permissions
  'users-permissions': {
    // lee la variable de entorno JWT_SECRET
    jwtSecret: env('JWT_SECRET'),
  },
});
