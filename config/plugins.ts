// path: ./config/plugins.js
export default ({ env }) => ({
  // Plugin Users & Permissions
  'users-permissions': {
    // lee la variable de entorno JWT_SECRET
    jwtSecret: env('JWT_SECRET'),
  },
});
