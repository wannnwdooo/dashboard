import React, { FC, useEffect, useState } from 'react';
import { gettingData, IRow, IRowList, updateRow } from '.';
import { RowListItem } from '../RowListItem';

export const RowList: FC<IRowList> = ({ depth }) => {
  const [rows, setRows] = useState<IRow[]>([]);
  const [updateRowValue, setUpdateRowValue] = useState<IRow[]>([]);
  const [removedRow, setRemovedRow] = useState(false);
  const [id, setId] = useState(0);

  const updateRowCb = (
    updateRowValue: IRow[],
    removedRow: boolean,
    id: number
  ) => {
    setUpdateRowValue(updateRowValue);
    setRemovedRow(removedRow);
    setId(id);
  };

  useEffect(() => {
    (async () => {
      await gettingData(rows, setRows);
    })();
  }, []);

  useEffect(() => {
    updateRow(rows, setRows, updateRowValue, removedRow, id);
  }, [updateRowValue]);

  return (
    <>
      {rows.map((listItem) => (
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
