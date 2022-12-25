import './Table.style.sass';
import { RowList } from '../RowList';

const theadItems = [
  { id: 1, value: 'Уровень' },
  { id: 2, value: 'Наименование работ' },
  { id: 3, value: 'Основная з/п' },
  { id: 4, value: 'Оборудование' },
  { id: 5, value: 'Накладные расходы' },
  { id: 6, value: 'Сметная прибыль' },
];

export const Table = () => {
  return (
    <div className="tableWrapper tableGrid">
      <div className="tableRowHeader">
        {theadItems.map(({ id, value }) => (
          <span key={id} className="tableCellHeader">
            {value}
          </span>
        ))}
      </div>
      <ul>
        <RowList depth={0} />
      </ul>
    </div>
  );
};
