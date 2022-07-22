import { useState, useEffect } from "react";
import { fetchAllSurah } from "../../../services";
import useAppContext from "../../../contexts";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";
import ListQuran from "./partials/List";
import { NotFound } from "../../components";
import { useRouter } from "next/router";

const HomeContainer = ({ surah }: any) => {
  const router = useRouter();
  const { state, dispatch } = useAppContext();
  // const [loading, setLoading] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    // fetchAllSurah(setLoading, dispatch);
    dispatch({ type: "SET_LIST_SURAH", payload: surah.data });
    localStorage.removeItem("id-ayat");
  }, []);

  return (
    <Box bgColor={colorMode === "dark" ? "gray.800" : "white"}>
      <Tabs isFitted colorScheme="purple">
        <TabList>
          <Tab>Surah</Tab>
          <Tab>Juz</Tab>
        </TabList>

        <TabPanels maxH="calc(100vh - 10vh)" overflow="auto">
          <TabPanel px={0}>
            <ListQuran surah={state.surahList} loading={router.isFallback} />
          </TabPanel>
          <TabPanel>
            <NotFound />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HomeContainer;
