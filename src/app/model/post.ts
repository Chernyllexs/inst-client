export class Post {
  private _userId: number;
  private _photoId: number;
  private _postText: string;
  private _postDate: string;


  constructor(userId: number, photoId: number, postText: string, postDate: string) {
    this._userId = userId;
    this._photoId = photoId;
    this._postText = postText;
    this._postDate = postDate;
  }


  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get photoId(): number {
    return this._photoId;
  }

  set photoId(value: number) {
    this._photoId = value;
  }

  get postText(): string {
    return this._postText;
  }

  set postText(value: string) {
    this._postText = value;
  }

  get postDate(): string {
    return this._postDate;
  }

  set postDate(value: string) {
    this._postDate = value;
  }
}

