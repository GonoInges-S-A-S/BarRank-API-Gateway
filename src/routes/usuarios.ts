import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router = Router();

router.use(
  '/',
  createProxyMiddleware({
    target: 'http://usuarios-service:3000', // puerto del microservicio de reseñas
    changeOrigin: true,
    pathRewrite: {
      '^/': '/api/users', // 🔁 traduce la ruta a lo que el microservicio espera
    },
  })
);

export default router;
