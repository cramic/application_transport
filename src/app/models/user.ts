export class User {
  constructor(
    public _id?: string,
    public email?: string,
    public password?: string,
    public id_user?: string,
    public role?: string,
    public pwd_changed?: boolean,
  ) {}
}
