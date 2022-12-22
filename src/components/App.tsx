import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import './App.style.sass';
import { gettingData, IRow, Table } from './Table';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const baseUrl = `http://185.244.172.108:8081`;
export const eID = 31357;
export const gettingDataUrl = `/v1/outlay-rows/entity/${eID}/row/list`;
export const createRowUrl = `/v1/outlay-rows/entity/${eID}/row/create`;

export const updateRowUrl = `/v1/outlay-rows/entity/${eID}/row/{id}/update`

export const App: FC = () => {
  const [rows, setRows] = useState<IRow[]>([]);

  useEffect(() => {
    (async () => {
      await gettingData(rows, setRows);
    })();
  },[rows]);

  const createRow: any = async () => {
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

  const editRow = async () => {
    const response = await axios.post(`${baseUrl}/v1/outlay-rows/entity/${eID}/row/24342/update`, {
      equipmentCosts: 50,
      estimatedProfit: 700,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 666,
      rowName: 'sdsfe233434f',
      salary: 300,
      supportCosts: 0,
    })
    console.log(response);
  }

  return (
    <div className="appWrapper">
      <Navbar />
      <Sidebar />
      <Table rows={rows} depth={0} />
      {/*<button onClick={gettingData}>Данные</button>*/}
      <div className="buttonContainer">
        <button onClick={editRow}>редактирование строки</button>
        <button onClick={createRow}>создание строки</button>
        <button onClick={() => console.log(rows)}>консоль</button>
      </div>
    </div>
  );
};
