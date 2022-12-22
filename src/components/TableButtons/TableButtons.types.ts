export interface ITableButtons {
  depth: number;
}
export interface IFilterArrayById {
  (
    array: { id: number; img: string; alt: string; value: string }[],
    num: number
  ): { id: number; img: string; alt: string; value: string }[];
}
