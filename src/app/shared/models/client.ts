export class Client {
  constructor(
    public id: string,
    public clientID: string,
    public email: string,
    public name: string,
    public country: string,
    public token: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {
  }

}
