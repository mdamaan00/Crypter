import mongoose from "mongoose";

const deltaSchema = new mongoose.Schema({
  hour: Number,
  day: Number,
  week: Number,
  month: Number,
  quarter: Number,
  year: Number,
});

const linkSchema = new mongoose.Schema({
  website: String,
  whitepaper: String,
  twitter: String,
  reddit: String,
  telegram: String,
  discord: String,
  medium: String,
  instagram: String,
  tiktok: String,
  youtube: String,
  linkedin: String,
  twitch: String,
  spotify: String,
  naver: String,
  wechat: String,
  soundcloud: String,
});

const cryptoSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  rank: Number,
  age: Number,
  color: String,
  png32: String,
  png64: String,
  webp32: String,
  webp64: String,
  exchanges: Number,
  markets: Number,
  pairs: Number,
  categories: [String],
  allTimeHighUSD: Number,
  circulatingSupply: Number,
  totalSupply: Number,
  maxSupply: Number,
  links: linkSchema,
  code: String,
  rate: Number,
  volume: Number,
  cap: Number,
  delta: deltaSchema,
});

const cryptoListSchema = new mongoose.Schema({
  cryptos: [cryptoSchema],
});

const CryptoList = mongoose.model("CryptoList", cryptoListSchema);

export default CryptoList;
