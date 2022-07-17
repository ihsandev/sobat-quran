import API from "./api";

export const fetchJuz = async (juz: number, setLoading: any) => {
  try {
    setLoading(true);
    const res = await fetch(`${API.juz}/${juz}`);
    const resToJson = await res.json();
    return resToJson;
  } catch (error) {
    return error;
  } finally {
    setLoading(false);
  }
};
