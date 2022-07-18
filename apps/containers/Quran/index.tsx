import { useState, useEffect } from "react";
import { fetchAllSurah } from "../../../services";
import useAppContext from "../../../contexts";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ListQuran from "./partials/List";
import { NotFound } from "../../components";

const HomeContainer = () => {
  const { state, dispatch } = useAppContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllSurah(setLoading, dispatch);
    localStorage.removeItem("id-ayat");
  }, []);

  return (
    <>
      <Tabs isFitted colorScheme="purple">
        <TabList>
          <Tab>Surah</Tab>
          <Tab>Juz</Tab>
        </TabList>

        <TabPanels maxH="80vh" overflow="auto">
          <TabPanel>
            <ListQuran surah={state.surahList} loading={loading} />
          </TabPanel>
          <TabPanel>
            <NotFound />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default HomeContainer;
