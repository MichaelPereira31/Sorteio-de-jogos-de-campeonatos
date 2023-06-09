import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../../../../config/auth';
import { AppError } from '../../errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  userId: string;
}

export function isAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing  ');
  }

  const [, token] = authHeader.split(' ');
  const decodeToken = verify(token, authConfig.jwt.secret as string);

  try {
    const { userId } = decodeToken as ITokenPayload;
    request.user = {
      id: userId,
    };

    return next();
  } catch (err) {
    throw new AppError('Invalid JWT token');
  }
}
