import React, { FC, useState } from 'react';
import { IRowListItem, objectSearchById } from '.';
import { RowList } from '../RowList';
import { TableButtons } from '../TableButtons';
import './RowListItem.style.sass';
import axios from 'axios';
import { baseUrl, eID } from '../App';

const style = [
  { id: 0, value: 'firstDepthLevel' },
  { id: 1, value: 'secondDepthLevel' },
  { id: 2, value: 'threeDepthLevel' },
];

const initialValue = {
  equipmentCosts: 0,
  estimatedProfit: 0,
  overheads: 0,
  rowName: '',
  salary: 0,
};
interface IValue {
  equipmentCosts: number;
  estimatedProfit: number;
  overheads: number;
  rowName: string;
  salary: number;
}

export const RowListItem: FC<IRowListItem> = ({ row, depth }) => {
  const {
    rowName,
    id,
    child,
    salary,
    overheads,
    estimatedProfit,
    equipmentCosts,
  } = row;
  const inputsValues = [
    {id: 0, placeholder: rowName},
    {id: 1, placeholder: salary},
    {id: 2, placeholder: equipmentCosts},
    {id: 3, placeholder: overheads},
    {id: 4, placeholder: estimatedProfit}
  ]
  const [value, setValue] = useState(initialValue);
  const [editRowState, setEditRowState] = useState(false);

  const editRowFn = async () => {
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
    console.log(response);
    setEditRowState(!editRowState);
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>, placeholder: string | number) => {
    setValue({
      ...value,
      [placeholder]: e.target.value
    })
  }

  return (
    <>
      <li key={id} className={`${objectSearchById(style, depth)}`}>
        <div
          className="tableBodyRow"
          onDoubleClick={() => setEditRowState(!editRowState)}
          onKeyDown={async e => {
            if (value.rowName !== '') {
              if (e.key === 'Enter') await editRowFn();
            }
          }}>
          <span>
            <TableButtons depth={depth} />
          </span>
          {!editRowState ? (
            <>
              <span className="tableBodyCell">{rowName}</span>
              <span className="tableBodyCell">{salary}</span>
              <span className="tableBodyCell">{equipmentCosts}</span>
              <span className="tableBodyCell">{overheads}</span>
              <span className="tableBodyCell">{estimatedProfit}</span>
            </>
          ) : (
            <>
              {inputsValues.map(({id, placeholder}) => (
                <input
                  key={id}
                  placeholder={`${placeholder}`}
                  className="tableBodyInput"
                  onChange={(e) => inputChange(e, placeholder)}
                />
              ))}
              {/*<input*/}
              {/*  placeholder={`${rowName}`}*/}
              {/*  className="tableBodyInput"*/}
              {/*  onChange={e => setValue({ ...value, rowName: e.target.value })}*/}
              {/*/>*/}
              {/*<input*/}
              {/*  placeholder={`${salary}`}*/}
              {/*  className="tableBodyInput"*/}
              {/*  onChange={e => setValue({ ...value, salary: +e.target.value })}*/}
              {/*/>*/}
              {/*<input*/}
              {/*  placeholder={`${equipmentCosts}`}*/}
              {/*  className="tableBodyInput"*/}
              {/*  onChange={e =>*/}
              {/*    setValue({ ...value, equipmentCosts: +e.target.value })*/}
              {/*  }*/}
              {/*/>*/}
              {/*<input*/}
              {/*  placeholder={`${overheads}`}*/}
              {/*  className="tableBodyInput"*/}
              {/*  onChange={e =>*/}
              {/*    setValue({ ...value, overheads: +e.target.value })*/}
              {/*  }*/}
              {/*/>*/}
              {/*<input*/}
              {/*  placeholder={`${estimatedProfit}`}*/}
              {/*  className="tableBodyInput"*/}
              {/*  onChange={e =>*/}
              {/*    setValue({ ...value, estimatedProfit: +e.target.value })*/}
              {/*  }*/}
              {/*/>*/}
            </>
          )}
        </div>
        {child.length !== 0 && (
          <ul>
            {Array.isArray(child) && <RowList rows={child} depth={depth + 1} />}
          </ul>
        )}
      </li>
    </>
  );
};
