import axios from "axios";
import { IRow } from ".";
import {baseUrl, gettingDataUrl} from "../App";

export const gettingData = async (
    rows: IRow[],
    setRows: (arg0: (prevState: IRow[]) => IRow[]) => void
) => {
    const response = await axios.get(`${baseUrl}${gettingDataUrl}`);
    console.log(response);
    if (rows.length === 0) {
        setRows(prevState => [...prevState, ...response.data]);
    }
};