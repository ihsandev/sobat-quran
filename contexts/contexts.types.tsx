export type Action = {
  type: "SET_LIST_SURAH" | "SET_BOOKMARK";
  payload: any;
};
export type Dispatch = (action: Action) => void;
export type State = {
  surahList?: any;
  bookmark?: any;
};
export type AppProviderProps = { children: React.ReactNode };
