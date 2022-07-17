import useAppContext from "../contexts";
import { addToLocalStorage, getFromLocalStorage } from "../utils/function";

export default function useAction() {
  const { dispatch } = useAppContext();

  const addToStorage = (params: any, type: any, name: string) => {
    const storage = getFromLocalStorage(name);
    const newData = storage ? [...storage] : [];
    newData.push(params);
    dispatch({ type, payload: newData });
    addToLocalStorage(name, newData);
  };

  const removeFromStorage = (id: any, type: any, name: string) => {
    const storage = getFromLocalStorage(name);
    if (storage) {
      const newData = storage?.filter(
        (item: any) => String(item?.number?.inSurah) !== String(id)
      );
      addToLocalStorage(name, newData);
      dispatch({ type, payload: newData });
    }
  };

  const checkIsBookmark = (number: any) => {
    let result = false;
    if (typeof window !== "undefined") {
      const storage = getFromLocalStorage("book-ayat");
      result = storage?.some(
        (item: any) =>
          String(item?.number?.inQuran) === String(number.inQuran) &&
          String(item?.number?.inSurah) === String(number.inSurah)
      );
    }
    return result;
  };

  const getBookmark = () => {
    const storage = getFromLocalStorage("book-ayat");
    if (storage) {
      dispatch({ type: "SET_BOOKMARK", payload: storage });
    }
  };

  return {
    addToStorage,
    removeFromStorage,
    checkIsBookmark,
    getBookmark,
  };
}
