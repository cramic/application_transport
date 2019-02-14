import { RefreshToken } from './refresh-token';

export class LoginToken {

  constructor(
    public tokenType: string,
    public accessToken: string,
    public refreshToken: RefreshToken,
    public expiresIn: Date
  ) {}
}
