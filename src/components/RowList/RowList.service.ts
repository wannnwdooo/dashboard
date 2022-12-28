import axios from 'axios';
import { IRow } from '.';
import { baseUrl, gettingDataUrl } from '../App';

export const gettingData = async (
  rows: IRow[],
  setRows: (arg0: (prevState: IRow[]) => IRow[]) => void
) => {
  const response = await axios.get(`${baseUrl}${gettingDataUrl}`);
  // console.log(response);
  if (rows.length === 0) {
    setRows((prevState) => [...prevState, ...response.data]);
  }
};

export const updateRow = (
  oldValue: IRow[],
  setOldValue: (arg0: IRow[]) => void,
  newValue: IRow[]
) => {
  if (newValue[0] === null) {
    setOldValue(
      // @ts-ignore
      oldValue.filter((oldObj) => oldObj.id !== newValue[1])
    );
    console.log(oldValue);
    return oldValue
  }
  setOldValue(
    oldValue.map((oldObj) => {
      const newObj = newValue.find((item) => item.id === oldObj.id);
      if (newObj) {
        return { ...oldObj, ...newObj };
      }
      return oldObj;
    })
  );
};
