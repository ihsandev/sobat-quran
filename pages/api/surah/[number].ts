const { data: quran } = require("../../../services/data/quran.json");

export default function handler(req: any, res: any) {
  const { number } = req.query;
  const data = quran[number - 1];
  if (data) {
    return res.status(200).send({
      code: 200,
      status: "OK.",
      message: "Success fetching surah.",
      data,
    });
  }
  return res.status(404).send({
    code: 404,
    status: "Not Found.",
    message: `Surah "${number}" is not found.`,
    data: {},
  });
}
