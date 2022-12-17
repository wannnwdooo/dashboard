import React, { FC } from 'react';
import { ITable } from './Table.types';

export const Table: FC<ITable> = ({ rows }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Уровень</th>
          <th>Наименование работ</th>
          <th>Основная з/п</th>
          <th>Оборудование</th>
          <th>Накладные расходы</th>
          <th>Сметная прибыль</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(
          ({
            id,
            rowName,
            salary,
            equipmentCosts,
            overheads,
            estimatedProfit,
          }) => (
            <tr key={id}>
              <td></td>
              <td>{rowName}</td>
              <td>{salary}</td>
              <td>{equipmentCosts}</td>
              <td>{overheads}</td>
              <td>{estimatedProfit}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
