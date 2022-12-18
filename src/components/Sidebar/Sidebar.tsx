import React, { FC, useState } from 'react';
import './Sidebar.style.sass';

const items = [
  { id: 1, value: 'По проекту' },
  { id: 2, value: 'Объекты' },
  { id: 3, value: 'РД' },
  { id: 4, value: 'МТО' },
  { id: 5, value: 'СМР' },
  { id: 6, value: 'График' },
  { id: 7, value: 'МиМ' },
  { id: 8, value: 'Рабочие' },
  { id: 9, value: 'Капвложения' },
  { id: 10, value: 'Бюджет' },
  { id: 11, value: 'Финансирование' },
  { id: 12, value: 'Панорамы' },
  { id: 13, value: 'Камеры' },
  { id: 14, value: 'Поручения' },
  { id: 15, value: 'Контрагенты' },
];
export const Sidebar: FC = () => {
  const [activeItem, setActiveItem] = useState(items[4].id);

  return (
    <div className="sidebarWrapper sidebarGrid">
      {items.map(({ id, value }) => (
        <div
          onClick={() => setActiveItem(id)}
          key={id}
          className={
            activeItem === id ? 'sidebarItem sidebarActive' : 'sidebarItem'
          }>
          <img
            src="/assets/image/square.svg"
            alt="square"
            className="sidebarItemImg"
          />
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};
