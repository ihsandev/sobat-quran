import { useRouter } from "next/router";
import { FiBookmark, FiBookOpen, FiHome } from "react-icons/fi";

export default function useConstants() {
  const { pathname } = useRouter();
  const menus = [
    {
      id: 1,
      link: "/beranda",
      label: "Beranda",
      icon: <FiHome size={pathname === "/beranda" ? 30 : 25} />,
      isActive: pathname === "/beranda",
    },
    {
      id: 2,
      link: "/",
      label: "Qur'an",
      icon: <FiBookOpen size={pathname === "/" ? 30 : 25} />,
      isActive: pathname === "/" || pathname === "/surah/[number]",
    },
    {
      id: 3,
      link: "/penanda",
      label: "Penanda",
      icon: <FiBookmark size={pathname === "/penanda" ? 30 : 25} />,
      isActive: pathname === "/penanda",
    },
  ];

  return {
    menus,
  };
}
