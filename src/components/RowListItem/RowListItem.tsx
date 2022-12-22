import React, { FC } from 'react';
import { IRowListItem, objectSearchById } from '.';
import { RowList } from '../RowList';
import { TableButtons } from '../TableButtons';
import './RowListItem.style.sass';

const style = [
  { id: 0, value: 'firstDepthLevel' },
  { id: 1, value: 'secondDepthLevel' },
  { id: 2, value: 'threeDepthLevel' },
];

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
  return (
    <li key={id} className={`${objectSearchById(style, depth)}`}>
      <div className="tableBodyRow">
        <span>
          <TableButtons depth={depth} />
        </span>
        <span className="tableBodyCell">{rowName}</span>
        <span className="tableBodyCell">{salary}</span>
        <span className="tableBodyCell">{equipmentCosts}</span>
        <span className="tableBodyCell">{overheads}</span>
        <span className="tableBodyCell">{estimatedProfit}</span>
      </div>
      {child.length !== 0 && (
        <ul>
          {Array.isArray(child) && <RowList rows={child} depth={depth + 1} />}
        </ul>
      )}
    </li>
  );
};
