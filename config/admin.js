// path: ./config/admin.js
module.exports = ({ env }) => ({
  apiToken: {
    // Si existe la var API_TOKEN_SALT la usa; si no, cae a este array de respaldo
    salt: env('API_TOKEN_SALT', 'localDevSaltChangeMe123!'),
  },
});

