export interface IUser {
  userId: string;
  pw: string;
  uid?: string;
}

export interface IPost {
  title: string;
  content: string;
  writer: string;
  crtDate: number;
  favoriteCnt?: number;
  thumbnail?: string;
}
