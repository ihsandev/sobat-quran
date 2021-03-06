import { Action, State } from "./contexts.types";

export const initialState = {
  surahList: [],
  juzList: {},
  bookmark: [],
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "SET_LIST_SURAH":
      return {
        ...state,
        surahList: action.payload,
      };
    case "SET_LIST_JUZ":
      return {
        ...state,
        juzList: action.payload,
      };
    case "SET_BOOKMARK":
      return {
        ...state,
        bookmark: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
