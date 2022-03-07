import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const updateProfile = async({ firstName, lastName, userId }) => {
  return prisma.profile.update({
    where: { 
       userId 
   },
    data: { 
       firstName, 
       lastName 
   },
  })
}

  export const createProfile = async({firstName, lastName, userId}) => {
    return prisma.profile.upsert({
       where:{
          userId: userId,
       },
       update:{
          firstName: firstName,
          lastName: lastName,
       },
       create:{
          firstName,
          lastName,
          User:{ 
             connect: {id: userId},
          }
       }
    })
 }

 export const findAllPosts = async (userId) => {
   return prisma.post.findMany({
      where: { 
         authorId: userId 
      }
   })
}

 export const findOneProfile = async (userId) => {
   return prisma.profile.findUnique({
      where: { 
         userId: userId 
      }
   })
}

export const deleteOneProfile = async (userId) => {
   return prisma.profile.deleteMany({
      where: {
         userId: userId
      }
   })
}

export const deleteProfilePosts = async (userId) => {
   return prisma.post.deleteMany({
      where: {
         authorId: userId
      }
   })
}

export const deleteUserById = async (userId) => {
   return prisma.user.delete({
      where: { 
         id: userId 
      }
   })
}

