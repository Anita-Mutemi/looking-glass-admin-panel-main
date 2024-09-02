import { createProxyMiddleware as proxy } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    ['/', '/login', '/auth', '/v1', '/projects', '/me', '/v1/projects'],
    proxy({
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
    }),
  );
}
