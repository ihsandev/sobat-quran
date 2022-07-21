import { Box, Icon } from "@chakra-ui/react";
import { FiBookmark } from "react-icons/fi";
import useAction from "../../../hooks/useAction";
import { IVerses } from "../../../utils/data-types";

interface IBookmarkAyat {
  detail?: IVerses;
  name?: any;
  size?: string | number;
  numberId?: number;
}

const BookmarkAyat = ({ detail, name, size, numberId }: IBookmarkAyat) => {
  const { addToStorage, removeFromStorage, checkIsBookmark } = useAction();
  const isBoomark = checkIsBookmark(detail?.number);
  const handleBookmark = () => {
    localStorage.removeItem("id-ayat");
    const params = {
      name: name?.transliteration?.id,
      number: detail?.number,
      numberId: numberId,
      ayat: detail?.text?.arab,
      meta: detail?.meta,
    };
    if (isBoomark) {
      removeFromStorage(detail?.number?.inSurah, "SET_BOOKMARK", "book-ayat");
    } else {
      addToStorage(params, "SET_BOOKMARK", "book-ayat");
    }
  };
  return (
    <Box cursor="pointer" onClick={handleBookmark}>
      <Icon
        color="primary"
        as={FiBookmark}
        fill={isBoomark ? "primary" : ""}
        fontSize={size || "inherit"}
      />
    </Box>
  );
};

export default BookmarkAyat;
