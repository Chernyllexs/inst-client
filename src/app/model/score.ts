export class Score {
  private _numberOfLikes:number;
  private _numberOfDislikes:number;


  constructor(numberOfLikes: number, numberOfDislikes: number) {
    this._numberOfLikes = numberOfLikes;
    this._numberOfDislikes = numberOfDislikes;
  }


  get numberOfLikes(): number {
    return this._numberOfLikes;
  }

  set numberOfLikes(value: number) {
    this._numberOfLikes = value;
  }

  get numberOfDislikes(): number {
    return this._numberOfDislikes;
  }

  set numberOfDislikes(value: number) {
    this._numberOfDislikes = value;
  }
}
