import { Router } from 'express';
import { jwtMiddleware } from '../../middlewares/jwt.middleware';
import AuthenticationRoutes from './authentication.route';
import UserRoutes from './users.route';
import PostRoutes from './posts.route';

const api = Router();

api.use('/authentication', AuthenticationRoutes);
api.use('/users', jwtMiddleware, UserRoutes);
api.use('/posts', jwtMiddleware, PostRoutes);

export default api;