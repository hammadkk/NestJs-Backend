import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcryptjs';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async login(loginDTO: LoginDTO): Promise<User> {
    const user = await this.userService.findOne(loginDTO);
    console.log('user', user);

    const passwordMatched = await bcrypt.compare(
      loginDTO.password,
      user.password,
    );

    if (passwordMatched) {
      delete user.password;
      return user;
    } else {
      throw new UnauthorizedException('Password does not match');
    }
  }
}
