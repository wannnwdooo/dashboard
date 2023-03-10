import React, { FC, useState } from 'react';
import { filterArrayById, ITableButtons } from '.';
import { objectSearchById } from '../RowListItem';
import './TableButtons.style.sass';

const openArrayContainer = [
  { id: 0, value: 'firstDepthButtonOpenContainer' },
  { id: 1, value: 'secondDepthButtonOpenContainer' },
  { id: 2, value: 'threeDepthButtonOpenContainer' },
];
const closeArrayContainer = [
  { id: 0, value: 'firstDepthButtonCloseContainer' },
  { id: 1, value: 'secondDepthButtonCloseContainer' },
  { id: 2, value: 'threeDepthButtonCloseContainer' },
];
export const TableButtons: FC<ITableButtons> = ({ depth, deleteRow }) => {
  const buttonArray = [
    {
      id: 0,
      img: '/assets/image/firstFolder.svg',
      alt: 'firstFolder',
      value: 'firstFolderButton',
    },
    {
      id: 1,
      img: '/assets/image/secondFolder.svg',
      alt: 'secondFolder',
      value: 'secondFolderButton',
    },
    {
      id: 2,
      img: '/assets/image/file.svg',
      alt: 'file',
      value: 'fileButton',
    },
    {
      id: 3,
      img: '/assets/image/delete.svg',
      alt: 'delete',
      value: 'deleteButton',
      fn: deleteRow,
    },
  ];

  const [rowCreation, setRowCreation] = useState(false);

  const currentItem = buttonArray.find((item) => item.id === depth);
  const obj = () => {
    if (!currentItem) return null;
    const { id, img, alt, value } = currentItem;
    return (
      <div
        key={id}
        className={`${objectSearchById(closeArrayContainer, depth)}`}>
        <img
          onMouseOver={() => setRowCreation(!rowCreation)}
          src={img}
          alt={alt}
          className={value}
        />
      </div>
    );
  };
  return (
    <>
      {!rowCreation ? (
        obj()
      ) : (
        <div className={`${objectSearchById(openArrayContainer, depth)}`}>
          {filterArrayById(buttonArray, depth).map(
            ({ id, img, alt, value, fn }) => (
              <img
                key={id}
                src={img}
                alt={alt}
                className={value}
                onClick={fn}
              />
            )
          )}
        </div>
      )}
    </>
  );
};
