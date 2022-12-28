import axios from 'axios';
import { FC } from 'react';
import './App.style.sass';
import { Table } from './Table';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const baseUrl = `http://185.244.172.108:8081`;
export const eID = 31357;
export const gettingDataUrl = `/v1/outlay-rows/entity/${eID}/row/list`;
export const createRowUrl = `/v1/outlay-rows/entity/${eID}/row/create`;

export const updateRowUrl = `/v1/outlay-rows/entity/${eID}/row/{id}/update`;

export const App: FC = () => {
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
      rowName: 'f11',
      salary: 0,
      supportCosts: 0,
    });
    console.log(response);
  };

  return (
    <div className="appWrapper">
      <Navbar />
      <Sidebar />
      <Table />
      <div className="buttonContainer">
        <button onClick={createRow}>создание строки</button>
      </div>
    </div>
  );
};
