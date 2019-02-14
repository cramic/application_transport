export class RefreshToken {
  constructor(
    public _id: string,
    public token: string,
    public userId: string,
    public userEmail: string,
    public expires: Date
  ) {}
}
