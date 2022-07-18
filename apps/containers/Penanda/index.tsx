import { Box } from "@chakra-ui/react";
import useAppContext from "../../../contexts";
import { BookmarkAyat, ListSurah, NotFound } from "../../components";

const PenandaContainer = () => {
  const { state } = useAppContext();
  return (
    <Box pt="0.5rem" pb="8rem">
      {state.bookmark?.length ? (
        <>
          {state.bookmark?.reverse().map((mark: any, i: number) => {
            return (
              <ListSurah
                key={i}
                title={mark.name}
                number={mark.numberId}
                numberAyat={mark.number.inSurah}
                arabic={mark.ayat}
                desc={`Ayat ke-${mark.number.inSurah}, Juz ke-${mark.meta.juz}`}
                bookmark={
                  <Box
                    mr="0.5rem"
                    position="absolute"
                    cursor="pointer"
                    top="20px"
                    left="0.8rem"
                  >
                    <BookmarkAyat detail={mark} name={mark.name} size="30px" />
                  </Box>
                }
              />
            );
          })}
        </>
      ) : (
        <NotFound />
      )}
    </Box>
  );
};

export default PenandaContainer;
