// src/routes/bares.ts
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Rutas de imagenes');
});

export default router;
