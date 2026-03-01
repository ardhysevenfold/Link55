export default {
  async fetch(request) {
    try {
      const emerald = await fetch("https://newapi.55lottertttapi.com/api/webapi/GetNoaverageEmerdList");
      const emeraldData = await emerald.json();

      const gameissue = await fetch("https://newapi.55lottertttapi.com/api/webapi/GetGameIssue");
      const gameissueData = await gameissue.json();

      return new Response(JSON.stringify({
        periode: gameissueData.periode,
        hasil: emeraldData.hasil
      }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });

    } catch (err) {
      return new Response(JSON.stringify({
        error: "Gagal ambil data"
      }), { headers: { "Content-Type": "application/json" } });
    }
  }
}
