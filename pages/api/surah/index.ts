const { data: quran } = require("../../../services/data/quran.json");

export default function handler(req: any, res: any) {
  const data = quran.map((item: any) => {
    const surah = { ...item };
    delete surah.verses;
    delete surah.preBismillah;
    return surah;
  });
  return res.status(200).send({
    code: 200,
    status: "OK.",
    message: "Success fetching all surah.",
    data,
  });
}
