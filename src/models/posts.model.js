import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// create a new Post
export const createOne = async ({ userId, message }) => 
  prisma.post.create({
    data:{
      message,
      Author:{
        connect: {id: userId}
      }
    }
  });

// return a Post
export const findOnePost = (id) => prisma.post.findUnique({
  where: { id: id },
})

// return a list of Post
export const findAllPosts = () => prisma.post.findMany() ;

// update a Post
export const updatePost = async ({ id, message }) => {
  return prisma.post.update({
    where: {
      id,
    },
    data: {
      message,
    },
  });
}

// delete a Post
export const deletePost = async (id) => {
  return prisma.post.delete({
    where: { id },
  });
}