import { DetailSurahContainer } from "../../apps/containers";
import Template from "../../apps/templates";
import API from "../../services/api";

const DetailSurah = ({ detailSurah }: any) => {
  return (
    <Template hideFooter>
      <DetailSurahContainer detailSurah={detailSurah} />
    </Template>
  );
};

export default DetailSurah;

export async function getServerSideProps(context: any) {
  const number = context.query.number;
  const res = await fetch(`${API.surah}/${number}`);
  const data = await res.json();

  return {
    props: {
      detailSurah: data,
    },
  };
}
