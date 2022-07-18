import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import useAppContext from "../../../../contexts";
import { addToLocalStorage } from "../../../../utils/function";

const LastAyat = () => {
  const { state } = useAppContext();
  const { push } = useRouter();
  const lastRead = state.bookmark?.slice(-1);
  if (state.bookmark?.length) {
    return (
      <Flex
        mx="1.2rem"
        flex={1}
        my="1rem"
        cursor="pointer"
        bgColor="primary"
        color="soft"
        px="1rem"
        py="0.7rem"
        borderRadius="1rem"
        boxSizing="border-box"
        onClick={() => {
          const idAyat = `ayat-${lastRead[0]?.number.inSurah}-${lastRead[0]?.numberId}`;
          addToLocalStorage("id-ayat", idAyat);
          push(`/surah/${lastRead[0]?.numberId}`);
        }}
      >
        <Box flex={1}>
          <Heading fontSize="1rem">Terakhir Baca</Heading>
          <Text fontSize="0.9rem">{`Surah ${lastRead[0]?.name}, Ayat ke-${lastRead[0]?.number?.inSurah}`}</Text>
          <Text fontSize="0.9rem">{`di Juz ke-${lastRead[0]?.meta?.juz}`}</Text>
        </Box>
        <FiArrowRight size={20} />
      </Flex>
    );
  }
  return null;
};

export default LastAyat;
