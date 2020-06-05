export class Accessorie {
  public id: number;
  public title: string;
  public description: string;
  public imageURL: string;


  constructor(id: number, title: string, description: string, imageURL: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageURL = imageURL;
  }
}
