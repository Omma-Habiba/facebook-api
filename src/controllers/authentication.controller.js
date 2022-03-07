import jwt from 'jsonwebtoken';
import * as UserModel from '../models/users.model';
import { HttpException, HttpStatus } from '../errors/httpException.errors';

export const login = async (request, response, next) => {
  let user = null;
  if(request.body.email != null && request.body.password != null) {
    user = await UserModel.findByCredentials(request.body.email, request.body.password);
  }

  if(user == null || !user) {
    next(new HttpException('Votre email ou mot de passe est incorrecte !', HttpStatus.UNAUTHORIZED));
  } else {
    const token = jwt.sign({ id: user.id }, 'SECRET');
    response.json({
        data: {
          token,
          user,
        },
      });
  }
}

export const register = async (request, response) => {
    const {
        email, 
        password
    } = request.body;

    const user = await UserModel.createOne({ email, password })
    response.status(201).json({data: { user }});
}

