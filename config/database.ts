// path: config/database.ts
export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL'),
    debug: false,
  },
});
