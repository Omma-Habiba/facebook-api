import { Router } from 'express';
import * as PostController from '../../controllers/posts.controller';

const api = Router();

api.post('/', PostController.createPost);  
api.get('/:id', PostController.findOnePost);   
api.get('/', PostController.findAllPosts); 
api.patch('/:id', PostController.updatePost);      
api.delete('/:id', PostController.deletePost);      

export default api;