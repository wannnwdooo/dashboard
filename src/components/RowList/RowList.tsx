import React, { FC } from 'react';
import { RowListItem } from '../RowListItem';
import { ITable } from '../Table';


export const RowList: FC<ITable> = ({ rows, depth }) => {
  return (
    <>
      {rows.map(listItem => (
        <RowListItem key={listItem.id} row={listItem} depth={depth} />
      ))}
    </>
  );
};
