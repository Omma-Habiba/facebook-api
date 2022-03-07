import jwt from 'jsonwebtoken';
import { HttpException, HttpStatus } from '../errors/httpException.errors';

export const jwtMiddleware = (request, _res, next) => {
  const { authorization: token} = request.headers;
  const secret = 'SECRET'

  try {
    const payload = jwt.verify(token, secret);
    request.user = payload;
    console.log(request)
    next();
  } catch (error) {
    next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
  }
}
