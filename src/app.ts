import express from 'express';
import cors from 'cors';
import baresRoutes from './routes/bares';
import categoriasRoutes from './routes/categorias';
import imagenesRoutes from './routes/imagenes';
import resenasRoutes from './routes/resenas';
import usuariosRoutes from './routes/usuarios';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/bares', baresRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/imagenes', imagenesRoutes);
app.use('/api/resenas', resenasRoutes);
app.use('/api/usuarios', usuariosRoutes);

export default app;
