import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import './App.style.sass';
import { gettingData, IRow, Table } from './Table';
import { Navbar } from './Navbar';

export const baseUrl = `http://185.244.172.108:8081`;
export const id = 31357;
export const gettingDataUrl = `/v1/outlay-rows/entity/${id}/row/list`;
export const createRowUrl = `/v1/outlay-rows/entity/${id}/row/create`;

export const App: FC = () => {
  const [rows, setRows] = useState<IRow[]>([]);

  useEffect(() => {
    (async () => {
      await gettingData(rows, setRows);
    })();
  }, [rows]);

  const createRow: any = async (
    equipmentCosts: number,
    estimatedProfit: number,
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    overheads: number,
    parentId: number,
    rowName: string,
    salary: number,
    supportCosts: number
  ) => {
    const response = await axios.post(`${baseUrl}${createRowUrl}`, {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      parentId: null,
      rowName: 'f2',
      salary: 0,
      supportCosts: 0,
    });
    console.log(response);
  };

  return (
    <>
      <Navbar />
      <Table rows={rows} />
      {/*<button onClick={gettingData}>Данные</button>*/}
      <button onClick={createRow}>создание строки</button>
      <button onClick={() => console.log(rows)}>консоль</button>
    </>
  );
};
