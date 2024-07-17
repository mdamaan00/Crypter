import axios from "axios";
import CryptoList from "./model/crypto.js";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY;
const apiUrl = "https://api.livecoinwatch.com/coins/map";
const data = {
  codes: ["ETH", "BNB", "BTC", "USDT", "SOL"],
  currency: "USD",
  sort: "rank",
  order: "ascending",
  offset: 0,
  limit: 0,
  meta: true,
};
const headers = {
  "content-type": "application/json",
  "x-api-key": apiKey,
};

const syncDb = () => {
  setInterval(async () => {
    try {
      const response = await axios.post(apiUrl, data, { headers });
      const newCryptoList = new CryptoList({ cryptos: response.data });
      await newCryptoList.save();
      const totalCount = await CryptoList.countDocuments();
      if (totalCount > 20) {
        const oldestItem = await CryptoList.findOne(
          {},
          {},
          { sort: { createdAt: 1 } }
        );
        await CryptoList.deleteOne({ _id: oldestItem._id });
      }
      console.log("Data synchronized successfully.");
    } catch (error) {
      console.error("Error making request:", error);
    }
  }, 5000);
};

export default syncDb;
