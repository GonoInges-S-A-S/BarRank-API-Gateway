import express from 'express';
import cors from 'cors';
import baresRoutes from './routes/bares';
import categoriasRoutes from './routes/categorias';
import imagenesRoutes from './routes/imagenes';
import resenasRoutes from './routes/resenas';
import usuariosRoutes from './routes/usuarios';

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// ⚠️ Estos deben estar exactamente así
app.use('/api/bares', baresRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/imagenes', imagenesRoutes);
app.use('/api/resenas', resenasRoutes);
app.use('/api/usuarios', usuariosRoutes); // ← este es el que importa

// Middleware de errores
app.use((err: any, req: any, res: any, next: any) => {
  console.error('[Gateway Error]', err.message);
  res.status(500).json({ error: 'Error en el API Gateway' });
});

export default app;
