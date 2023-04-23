import { LoginDto } from "../dtos/login.dto";
import { UserDto } from "../dtos/user.dto";

export interface UserService {
  login(dto: LoginDto): Promise<UserDto>;
}
