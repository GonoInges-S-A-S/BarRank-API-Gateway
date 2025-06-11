// src/routes/bares.ts
import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router = Router();

router.use(
  '/',
  createProxyMiddleware({
    target: 'http://resenas-service:3000', // puerto del microservicio de reseñas
    changeOrigin: true,
    pathRewrite: {
      '^/': '/api/reviews', // 🔁 traduce la ruta a lo que el microservicio espera
    },
  })
);

export default router;
