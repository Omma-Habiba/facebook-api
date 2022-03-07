import { Router } from 'express';
import * as UserController from '../../controllers/users.controller';

const api = Router();

api.get('/:id/posts', UserController.findAllPosts);  
api.get('/:id/profile', UserController.findOneProfile); 
api.patch('/:id/profile', UserController.updateOneProfile); 
api.delete('/:id', UserController.deleteOneProfile);      

export default api;

