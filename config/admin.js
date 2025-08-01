// path: ./config/admin.ts
export default ({ env }) => ({
  // Para los API Tokens (Plugin users-permissions)
  apiToken: {
    salt: env('API_TOKEN_SALT', 'localDevSaltChangeMe123!'),
  },
  // Para la autenticación del panel Admin (JWT interno)
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'localDevAuthSecretChangeMe456!'),
  },
});

