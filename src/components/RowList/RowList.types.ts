export interface IRow {
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
  deletedRow?: boolean;
}
export interface IRowList {
  rows?: IRow[];
  depth: number;
}
