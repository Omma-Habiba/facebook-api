import * as PostModel from '../models/posts.model';
import { HttpException, HttpStatus } from '../errors/httpException.errors';

export const createPost = async (request, response) => {
    const { message } = request.body;
    const user = request.user;
    console.log(request)
    
    const post = await PostModel.createOne({
        message: message,
        userId: user.id
    });
  
    return response
      .status(201)
      .json({post});
}

export const findOnePost = async (request, response) => {
    const { id } = request.params;
  
    const post = await PostModel.findOnePost(Number(id));
    if (!post) {
      throw new HttpException('Unauthorized', HttpStatus.NOT_FOUND);
    }
  
    response.status(200).json({ post });
}

export const findAllPosts = async (_req, res) => {
    res.status(200).json({
      data: {
        posts: await PostModel.findAllPosts(),
      },
    });
}

export const updatePost = async (request, response) => {
    const { id } = request.params;
    const { message } = request.body;
  
    const post = await PostModel.updatePost({
      id: Number(id),
      message
    });
  
    response.json({ post });
}
  
export const deletePost = async (req, res) => {
  const id = req.params.id;

  await PostModel.deletePost(Number(id));

  res.status(204).end();
}


  