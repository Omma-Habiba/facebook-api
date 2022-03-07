import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findByCredentials = async ( email, password ) => {
  return prisma.user.findFirst({
    where: {
      email: email,
      password: password
    },
  });
}

// on créer des users 
export const createOne = async ({email, password }) => 
  prisma.user.create({
    data: {
      email,
      password,
      Profile: {
        create: {
          firstName: '',
          lastName: '',
        },
      },
    }
  });





































































