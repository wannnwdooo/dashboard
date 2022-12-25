import { IRow } from "../RowList";

export interface IRowListItem {
  row: {
    child: IRow[];
    id: number;
    equipmentCosts: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    parentId: number;
    rowName: string;
    salary: number;
    supportCosts: number;
  };
  depth: number;

  updateRowCb: (value: IRow) => void
}

export interface IObjectSearchById {
  (
    array: { id: number; img?: string; alt?: string; value: string }[],
    num: number
  ): void;
}
