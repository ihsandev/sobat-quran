import cache from "memory-cache";

export const addToLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getFromLocalStorage = (name: string) => {
  const newData: any = localStorage.getItem(name);
  function isJsonString(str: any) {
    try {
      JSON.parse(str);
    } catch (e) {
      return str;
    }
    return JSON.parse(str);
  }
  return isJsonString(newData);
};

export const cachedFetch = async (url: string) => {
  const cachedResponse = cache.get(url);
  if (cachedResponse) {
    return cachedResponse;
  } else {
    const hours = 24;
    const response = await fetch(url);
    const data = await response.json();
    cache.put(url, data, hours * 1000 * 60 * 60);
    return data;
  }
};
