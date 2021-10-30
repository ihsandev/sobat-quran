import API from "./api";

export const fetchAllSurah = async (setLoading) => {
  try {
    setLoading(true)
    const res = await fetch(API.surah)
    const resToJson = await res.json()
    return resToJson;
  } catch (error) {
    return error;
  } finally {
    setLoading(false)
  }
}

export const fetchSpecificSurah = async (number: number) => {
  const res = await fetch(`${API.surah}/${number}`)
  const resToJson = await res.json()
  return resToJson;
}