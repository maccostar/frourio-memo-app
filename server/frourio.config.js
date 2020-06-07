module.exports = {
  port: 8080,
  basePath: '/api',
  helmet: true,
  staticDir: process.env.NODE_ENV === 'production' ? 'dist' : undefined,
  cors: process.env.NODE_ENV !== 'production'
}
