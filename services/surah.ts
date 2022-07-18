import API from "./api";
import { cachedFetch } from "../utils/function";

export const fetchAllSurah = async (setLoading: any, dispatch: any) => {
  try {
    setLoading(true);
    const res = await cachedFetch(API.surah);
    dispatch({ type: "SET_LIST_SURAH", payload: res.data });
  } catch (error) {
    return error;
  } finally {
    setLoading(false);
  }
};

export const fetchSpecificSurah = async (number: number, setLoading: any) => {
  try {
    setLoading(true);
    const res = await cachedFetch(`${API.surah}/${number}`);
    return res;
  } catch (error) {
    return error;
  } finally {
    setLoading(false);
  }
};
