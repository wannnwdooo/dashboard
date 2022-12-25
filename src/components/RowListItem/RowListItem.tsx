import React, { FC, useState } from 'react';
import { IRowListItem, objectSearchById } from '.';
import { TableButtons } from '../TableButtons';
import './RowListItem.style.sass';
import axios from 'axios';
import { baseUrl, eID } from '../App';

const treeStyle = [
  { id: 0, value: 'firstDepthLevel' },
  { id: 1, value: 'secondDepthLevel' },
  { id: 2, value: 'threeDepthLevel' },
];
export const RowListItem: FC<IRowListItem> = ({ row, depth, updateRowCb }) => {
  const {
    rowName,
    id,
    child,
    salary,
    overheads,
    estimatedProfit,
    equipmentCosts,
  } = row;
  const spanRow = {
    rowName,
    salary,
    equipmentCosts,
    overheads,
    estimatedProfit,
  };

  const inputsValues = [
    { id: 0, placeholder: rowName, inputName: 'rowName' },
    { id: 1, placeholder: salary, inputName: 'salary' },
    { id: 2, placeholder: equipmentCosts, inputName: 'equipmentCosts' },
    { id: 3, placeholder: overheads, inputName: 'overheads' },
    { id: 4, placeholder: estimatedProfit, inputName: 'estimatedProfit' },
  ];

  const initialValue = {
    equipmentCosts: equipmentCosts || 0,
    estimatedProfit: estimatedProfit || 0,
    overheads: overheads || 0,
    rowName: rowName || '',
    salary: salary || 0,
  };

  const [value, setValue] = useState(initialValue);
  const [editRowState, setEditRowState] = useState(false);

  const updateRow = async () => {
    const response = await axios.post(
      `${baseUrl}/v1/outlay-rows/entity/${eID}/row/${id}/update`,
      {
        equipmentCosts: value.equipmentCosts,
        estimatedProfit: value.estimatedProfit,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: value.overheads,
        rowName: value.rowName,
        salary: value.salary,
        supportCosts: 0,
      }
    );
    updateRowCb(response.data.current);
    setEditRowState(!editRowState);
  };
  const updateRowHandler: React.KeyboardEventHandler<
    HTMLInputElement
  > = async e => {
    if (value.rowName !== '') {
      if (e.key === 'Enter') await updateRow();
    }
  };

  const inputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    setValue({
      ...value,
      [inputName]: e.target.value,
    });
  };

  return (
    <>
      <li key={id} className={`${objectSearchById(treeStyle, depth)}`}>
        <div
          className="tableBodyRow"
          onDoubleClick={() => setEditRowState(!editRowState)}
          onKeyDown={updateRowHandler}>
          <TableButtons depth={depth} />
          {!editRowState ? (
            <>
              {Object.entries(spanRow).map(([key, value]) => (
                <span key={key} className="tableBodyCell">
                  {value}
                </span>
              ))}
            </>
          ) : (
            <>
              {inputsValues.map(({ id, placeholder, inputName }) => (
                <input
                  key={id}
                  placeholder={`${placeholder}`}
                  className="tableBodyInput"
                  onChange={e => inputChange(e, inputName)}
                />
              ))}
            </>
          )}
        </div>
        {child.length !== 0 && (
          <ul>
            {Array.isArray(child) &&
              child.map(listItem => (
                <RowListItem
                  key={listItem.id}
                  row={listItem}
                  depth={depth + 1}
                  updateRowCb={updateRowCb}
                />
              ))}
          </ul>
        )}
      </li>
    </>
  );
};
