import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../modules/users/services/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { JwtPayload } from 'src/types/jwt.type';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { LoginUserDto } from 'src/modules/users/dto/login-user.dto';
import { User as UserEntity } from 'src/modules/users/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto) {
    const existing = await this.usersService.findByEmail(createUserDto.email);
    if (existing) throw new UnauthorizedException('Email déja utilisé !');

    const user = await this.usersService.createUser(createUserDto);
    return this.generateToken(user);
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.usersService.findByEmail(loginUserDto.email);
    if (
      !user ||
      !(await bcrypt.compare(loginUserDto.password, user.password))
    ) {
      throw new UnauthorizedException('Identifiants invalides !');
    }
    return this.generateToken(user);
  }

  private generateToken(user: User) {
    const payload: JwtPayload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      user: new UserEntity(user),
    };
  }
}
