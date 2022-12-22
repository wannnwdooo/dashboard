import { IFilterArrayById } from ".";

export const filterArrayById: IFilterArrayById = (array, num) => {
  return array.filter(item => item.id >= num);
};