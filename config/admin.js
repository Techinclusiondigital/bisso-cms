module.exports = ({ env }) => {
  console.log("admin.js loaded!", env('ADMIN_JWT_SECRET'));
  return {
    apiToken: { salt: env('API_TOKEN_SALT') },
    auth: { secret: env('ADMIN_JWT_SECRET') },
  };
};
