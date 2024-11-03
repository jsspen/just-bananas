export interface Item {
  id: string;
  name: string;
  quantity: number;
  store?: string;
  notes?: string;
  complete: boolean;
}
