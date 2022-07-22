import { useEffect } from "react";
import { QuranContainer } from "../apps/containers";
import Template from "../apps/templates";
import API from "../services/api";

export default function Quran({ surah }: any) {
  return (
    <Template>
      <QuranContainer surah={surah} />
    </Template>
  );
}

export async function getStaticProps() {
  const res = await fetch(API.surah);
  const data = await res.json();

  return {
    props: {
      surah: data,
    },
    revalidate: 10,
  };
}
