import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import { fetchAllSurah } from "../../../services";
import { Greetings, ListSurah } from "../../components";
import { LoadingListSurah } from "../../../utils/loading";
import { IListSurah } from "../../../utils/data-types";
import useAppContext from "../../../contexts";

const HomeContainer = () => {
  const { state, dispatch } = useAppContext();
  const [loading, setLoading] = useState(false);

  const getSurah = async () => {
    const result = await fetchAllSurah(setLoading);
    dispatch({ type: "SET_LIST_SURAH", payload: result.data });
  };

  useEffect(() => {
    getSurah();
  }, []);

  return (
    <Box pb="8rem">
      <Greetings />
      <Box px="1rem">
        {loading ? (
          <>
            <LoadingListSurah />
            <LoadingListSurah />
            <LoadingListSurah />
            <LoadingListSurah />
            <LoadingListSurah />
            <LoadingListSurah />
          </>
        ) : (
          state.surahList &&
          state.surahList?.map((surah: IListSurah) => (
            <ListSurah
              key={surah.number}
              number={surah?.number}
              title={surah.name.transliteration.id}
              desc={surah.name.translation.id}
              arabic={surah.name.short}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default HomeContainer;
