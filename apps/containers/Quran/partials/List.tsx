import { Box } from "@chakra-ui/react";
import { IListSurah } from "../../../../utils/data-types";
import { LoadingListSurah } from "../../../../utils/loading";
import { ListSurah } from "../../../components";

const ListQuran = ({ surah, loading }: any) => {
  return (
    <>
      <Box px="1rem" pb="4rem">
        {loading ? (
          <>
            {[...new Array(12)].map((_, i) => (
              <LoadingListSurah key={i} />
            ))}
          </>
        ) : (
          surah &&
          surah?.map((surah: IListSurah) => (
            <Box key={surah.number}>
              <ListSurah
                number={surah?.number}
                title={surah.name.transliteration.id}
                desc={surah.name.translation.id}
                arabic={surah.name.short}
              />
            </Box>
          ))
        )}
      </Box>
    </>
  );
};

export default ListQuran;