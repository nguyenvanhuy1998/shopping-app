export interface Offer {
  id: string;
  code: string;
  title: string;
  description?: string;
  percent: string;
  files?: File[];
  startAt: number;
  endAt: number;
}

export interface File {
  path: string;
  url: string;
}
