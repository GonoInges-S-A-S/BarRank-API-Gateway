// src/routes/bares.ts
import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router = Router();

router.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3004', // puerto del microservicio de imagenesBares
    changeOrigin: true,
    pathRewrite: {
      '^/': '/api/imagenes', // 🔁 traduce la ruta a lo que el microservicio espera
    },
  })
);

export default router;
