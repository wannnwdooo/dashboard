import React, { FC, useState } from 'react';
import { filterArrayById, ITableButtons } from '.';
import { objectSearchById } from '../RowListItem';
import './TableButtons.style.sass';

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
  },
];
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
export const TableButtons: FC<ITableButtons> = ({ depth }) => {
  const [rowCreation, setRowCreation] = useState(false);
  const obj = () => {
    const found = buttonArray.find(item => item.id === depth);
    if (found) {
      return [found].map(({ id, img, alt, value }) => (
        <div
          key={id}
          className={`${objectSearchById(closeArrayContainer, depth)}`}>
          <img src={img} alt={alt} className={value} />
        </div>
      ));
    }
  };
  console.log(obj(), depth);
  return (
    <>
      {!rowCreation ? (
        obj()
      ) : (
        <div className={`${objectSearchById(openArrayContainer, depth)}`}>
          {filterArrayById(buttonArray, depth).map(
            ({ id, img, alt, value }) => (
              <img key={id} src={img} alt={alt} className={value} />
            )
          )}
        </div>
      )}
    </>
  );
};
