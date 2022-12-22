import { IRow } from '../Table';

export interface IRowListItem {
  row: {
    rowName: string;
    salary: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
    id: number;
    child: IRow[];
  };
  depth: number;
}

export interface IObjectSearchById {
  (
    array: { id: number; img?: string; alt?: string; value: string }[],
    num: number
  ): void;
}
