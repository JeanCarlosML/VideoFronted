export interface IVideo {
  _id?: string;
  createdAt?: string;
  description: string;
  title: string;
  updatedAt?: string;
  url: string;
  loadVideos?: () => void;
}
