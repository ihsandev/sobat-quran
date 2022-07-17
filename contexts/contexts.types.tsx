export type Action = {
  type: "SET_LIST_SURAH" | "SET_LIST_JUZ" | "SET_BOOKMARK";
  payload: any;
};
export type Dispatch = (action: Action) => void;
export type State = {
  surahList?: any;
  juzList?: any;
  bookmark?: any;
};
export type AppProviderProps = { children: React.ReactNode };
