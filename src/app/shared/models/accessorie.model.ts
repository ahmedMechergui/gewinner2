export class Accessorie {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public isAvailable: string,
    public price: string,
    public imageURL: Array<string>,
    public createdAt: string,
    public updatedAt: string
  ) {
  }
}
