import CryptoList from "../model/crypto.js";

export const getCryptoData = async (request, response) => {
  try {
    const recentCryptoLists = await CryptoList.find()
      .sort({ _id: -1 })
      .limit(20);
    const data = recentCryptoLists.flatMap((cryptoList) =>
      cryptoList.cryptos.filter((crypto) => crypto.code === request.params.code)
    );
    return response.status(200).json(getProcessedData(data));
  } catch (error) {
    console.error("Error fetching data:", error);
    return response.status(500).json({ error: "Error fetching data" });
  }
};

const getProcessedData = (data) => {
  const processedData = data.map((crypto) => ({
    code: crypto.code,
    name: crypto.name,
    rate: crypto.rate,
    volume: crypto.volume,
    cap: crypto.cap,
    allTimeHighUSD: crypto.allTimeHighUSD,
  }));
  return processedData;
};
