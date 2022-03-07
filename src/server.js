import express from 'express';
import routes from './routes';
import { catchError } from './middlewares/catchError.middleware';

export const launch = ({ protocol, host, port }) => {
  const application = express();

  application.use(express.json());
  application.use(routes);
  application.use(catchError());

  application.listen(
    port,
    () => console.log(`Server started at ${protocol}://${host}:${port}`),
  );
}