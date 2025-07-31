// path: bisso-cms/config/plugins.ts
import { Env } from '@strapi/types';

export default ({ env }: { env: Env }) => ({
  // Configuración para el plugin Users & Permissions
  'users-permissions': {
    config: {
      // Le decimos que lea tu JWT_SECRET del .env
      jwtSecret: env('JWT_SECRET'),
    },
  },
});


