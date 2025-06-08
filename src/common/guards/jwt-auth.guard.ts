import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const path = req.path;
    const method = req.method;

    if (
      (path === '/auth/login' && method === 'POST') ||
      (path === '/auth/signup' && method === 'POST')
    ) {
      return true;
    }

    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token manquant');
    }

    const token = authHeader.split(' ')[1];

    try {
      const secret = this.configService.get<string>('JWT_SECRET');
      await this.jwtService.verifyAsync(token, { secret });

      return true;
    } catch (err) {
      throw new UnauthorizedException(
        'Token invalide ou expiré: ',
        err.message,
      );
    }
  }
}
