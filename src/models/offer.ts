export interface Offer {
  id: string;
  code: string;
  title: string;
  description?: string;
  percent: string;
  files?: any;
  startDate: number;
  endDate: number;
}
