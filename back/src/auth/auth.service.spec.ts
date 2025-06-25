import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('signup: should return a token if credentials are correct', () => {
    const user = {
      email: 'test@gmail.com',
      name: 'julien',
      password: 'passwordTest',
    };
    expect(service.signup(user)).toBe('token');
  });

  it('signup: should throw an error with wrong email', () => {
    const user = {
      email: 'testgmailcom',
      name: 'julien',
      password: 'passwordTest',
    };
    expect(service.signup(user)).toThrow('Unauthorized');
  });

  it('login: should return a token if credentials are correct', () => {
    const user = {
      email: 'test@gmail.com',
      password: 'passwordTest',
    };
    expect(service.login(user)).toBe('token');
  });

  it('login: should throw an error with wrong email', () => {
    const user = {
      email: 'fail',
      password: '654',
    };
    expect(service.login(user)).toThrow('Unauthorized');
  });
});
