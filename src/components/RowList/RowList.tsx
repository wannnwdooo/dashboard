import React, { FC, useEffect, useState } from 'react';
import { gettingData, IRow, IRowList } from '.';
import { RowListItem } from '../RowListItem';

export const RowList: FC<IRowList> = ({ depth }) => {
  const [rows, setRows] = useState<IRow[]>([]);

  const updateRowCb = () => {
  };

  useEffect(() => {
    (async () => {
      await gettingData(rows, setRows);
    })();
  });

  return (
    <>
      {rows.map(listItem => (
        <RowListItem
          key={listItem.id}
          row={listItem}
          depth={depth}
          updateRowCb={updateRowCb}
        />
      ))}
    </>
  );
};
