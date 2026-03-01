export default async function handler(req, res) {
  try {

    const emerald = await fetch("https://newapi.55lottertttapi.com/api/webapi/GetNoaverageEmerdList");
    const emeraldData = await emerald.json();

    const gameissue = await fetch("https://newapi.55lottertttapi.com/api/webapi/GetGameIssue");
    const gameissueData = await gameissue.json();

    res.status(200).json({
      periode: gameissueData.periode,
      hasil: emeraldData.hasil
    });

  } catch (err) {
    res.status(500).json({
      error: "Gagal ambil data"
    });
  }
}
