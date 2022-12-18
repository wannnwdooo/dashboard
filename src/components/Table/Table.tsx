import React, { FC } from 'react';
import { ITable } from './Table.types';
import './Table.style.sass';

const theadItems = [
  { id: 1, value: 'Уровень' },
  { id: 2, value: 'Наименование работ' },
  { id: 3, value: 'Основная з/п' },
  { id: 4, value: 'Оборудование' },
  { id: 5, value: 'Накладные расходы' },
  { id: 6, value: 'Сметная прибыль' },
];

export const Table: FC<ITable> = ({ rows }) => {
  return (
    <div className="tableWrapper tableGrid">
      <table className="tableContainer">
        <thead>
          <tr className="tableRowHeader">
            {theadItems.map(({ id, value }) => (
              <th key={id} className="tableCellHeader">
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(
            ({
              child,
              id,
              rowName,
              salary,
              equipmentCosts,
              overheads,
              estimatedProfit,
            }) => (
              <>
                <tr key={id} className="tableBodyRow">
                  <td className="firstLevelCell"></td>
                  <td className="tableBodyCell">{rowName}</td>
                  <td className="tableBodyCell">{salary}</td>
                  <td className="tableBodyCell">{equipmentCosts}</td>
                  <td className="tableBodyCell">{overheads}</td>
                  <td className="tableBodyCell">{estimatedProfit}</td>
                </tr>

                {Array.isArray(child) &&
                  child.length !== 0 &&
                  child.map(
                    ({
                      id,
                      rowName,
                      salary,
                      equipmentCosts,
                      overheads,
                      estimatedProfit,
                    }) => (
                      <tr key={id} className="tableBodyRow">
                        <td className="threeLevelCell"></td>
                        <td className="tableBodyCell">{rowName}</td>
                        <td className="tableBodyCell">{salary}</td>
                        <td className="tableBodyCell">{equipmentCosts}</td>
                        <td className="tableBodyCell">{overheads}</td>
                        <td className="tableBodyCell">{estimatedProfit}</td>
                      </tr>
                    )
                  )}
              </>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
