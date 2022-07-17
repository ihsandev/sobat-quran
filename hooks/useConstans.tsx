import { useRouter } from "next/router";
import { FiBookmark, FiBookOpen, FiHome } from "react-icons/fi";
import useAppContext from "../contexts";

export default function useConstants() {
  const { pathname } = useRouter();
  const { state } = useAppContext();
  const menus = [
    {
      id: 1,
      link: "/beranda",
      label: "Beranda",
      icon: <FiHome size={pathname === "/beranda" ? 30 : 25} />,
      isActive: pathname === "/beranda",
      counter: null,
    },
    {
      id: 2,
      link: "/",
      label: "Qur'an",
      icon: <FiBookOpen size={pathname === "/" ? 30 : 25} />,
      isActive: pathname === "/" || pathname === "/surah/[number]",
      counter: null,
    },
    {
      id: 3,
      link: "/penanda",
      label: "Penanda",
      icon: <FiBookmark size={pathname === "/penanda" ? 30 : 25} />,
      isActive: pathname === "/penanda",
      counter: state.bookmark?.length,
    },
  ];

  return {
    menus,
  };
}
