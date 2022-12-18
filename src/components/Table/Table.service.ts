import axios from 'axios';
import { baseUrl, gettingDataUrl } from '../App';
import { IRow } from './Table.types';

const deepSearchByKey = (
  object: any,
  originalKey: string,
  matches: IRow[] = []
) => {
  if (object != null) {
    if (Array.isArray(object)) {
      for (let arrayItem of object) {
        deepSearchByKey(arrayItem, originalKey, matches);
      }
    } else if (typeof object == 'object') {
      for (let key of Object.keys(object)) {
        if (key === originalKey) {
          matches.push(object);
        } else {
          deepSearchByKey(object[key], originalKey, matches);
        }
      }
    }
  }
  return matches;
};
export const gettingData = async (
  rows: IRow[],
  setRows: (arg0: (prevState: IRow[]) => IRow[]) => void
) => {
  const response = await axios.get(`${baseUrl}${gettingDataUrl}`);
  console.log(response);
  // let result = deepSearchByKey(response, 'rowName');
  if (rows.length === 0) {
    setRows(prevState => [...prevState, ...response.data]);
  }
};
