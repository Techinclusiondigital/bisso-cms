// path: config/server.js

// >>> DEBUG: imprime las vars clave al arrancar
console.log('>>> process.env.APP_KEYS =', process.env.APP_KEYS);
console.log('>>> process.env.PORT     =', process.env.PORT);

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  // Usa el PORT que te pasa Render, sin valor por defecto
  port: env.int('PORT'),

  app: {
    // Lee APP_KEYS de las ENV vars
    keys: env.array('APP_KEYS'),
  },
});


