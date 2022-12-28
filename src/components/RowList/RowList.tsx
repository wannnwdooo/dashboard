import React, { FC, useEffect, useState } from 'react';
import { gettingData, IRow, IRowList, updateRow } from '.';
import { RowListItem } from '../RowListItem';

export const RowList: FC<IRowList> = ({ depth }) => {
  let [rows, setRows] = useState<IRow[]>([]);
  const [updateRowValue, setUpdateRowValue] = useState<IRow[]>([]);

  const updateRowCb = (updateRowValue: IRow[]) => {
    setUpdateRowValue(updateRowValue);
    console.log(updateRowValue)
  };

  useEffect(() => {
    (async () => {
      await gettingData(rows, setRows);
      // console.log(rows);
    })();
  }, []);

  useEffect(() => {
    updateRow(rows, setRows, updateRowValue);
    console.log(updateRowValue)
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
