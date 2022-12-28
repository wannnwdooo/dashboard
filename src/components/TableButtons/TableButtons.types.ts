export interface ITableButtons {
  depth: number;
  deleteRow: () => void
}
export interface IFilterArrayById {
  (
    array: { id: number; img: string; alt: string; value: string; fn?: () => void }[],
    num: number
  ): { id: number; img: string; alt: string; value: string; fn?: () => void }[];
}
