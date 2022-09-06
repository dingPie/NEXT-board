export interface IUser {
  userId: string;
  pw: string;
  uid?: string;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  writer: string;
  crtDate: number;
  favoriteCnt?: number;
  thumbnail?: string;
}
