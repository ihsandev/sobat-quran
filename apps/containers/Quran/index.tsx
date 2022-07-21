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

const HomeContainer = () => {
  const { state, dispatch } = useAppContext();
  const [loading, setLoading] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    fetchAllSurah(setLoading, dispatch);
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
            <ListQuran surah={state.surahList} loading={loading} />
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
