// src/routes/bares.ts
import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router = Router();

router.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3001', // puerto del microservicio de bares
    changeOrigin: true,
    pathRewrite: {
      '^/': '/api/bares', // 🔁 traduce la ruta a lo que el microservicio espera
    },
    
  })
);

export default router;
