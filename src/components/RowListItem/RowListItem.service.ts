import { IObjectSearchById } from '.';

export const objectSearchById: IObjectSearchById = (array, num) => {
  const found = array.find(item => item.id === num);
  if (found) return found.value;
};
