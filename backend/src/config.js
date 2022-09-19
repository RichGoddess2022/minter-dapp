require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Rich Goddess Paradise";
const description = "The Rich Goddess Paradise is a collection of 111 AI-generated goddesses radiating their love and light on the Ethereum Blockchain.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 111,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Eyebrows" },
      { name: "Lips" },
      { name: "Nose" },
      { name: "Tights" },
      { name: "Clothe" },
      { name: "Neck Accessory" },
      { name: "Chinese Zodiac" },
      { name: "Hair" },
      { name: "Money" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://richgoddess.io/", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'ethereum'; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Rich-Goddess';
const CONTRACT_SYMBOL = 'RICH';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x6a81E64f4E6E3434b384b80B29c39F138Bac115e';
const TREASURY_ADDRESS = '0x6a81E64f4E6E3434b384b80B29c39F138Bac115e';
const MAX_SUPPLY = 106; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.11; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-09-22T07:00:00+00:00"; // This is required. Eg: 2022-09-11T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-09-21T07:00:00+00:00"; // Optional. Eg: 2022-09-21T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x6a81E64f4E6E3434b384b80B29c39F138Bac115e"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = "https://ipfs.io/ipfs/bafybeicqg6egjxtzcyuozi2g3xdvnihxqvaqin77d6lq4nvjm54bacsi4m"; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x33C7E8BAb3f5CD11758c623F830fF1021D8e4406", "0x6a81E64f4E6E3434b384b80B29c39F138Bac115e","0xec5ee3817790e68068103dCe59F33791F460E3Da","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","0x2b6ed29a95753c3ad948348e3e7b1a251080ffb9", "0xfC0023312C06cd949c78368c88aC0286538fbAB6","0xa73D833BC6985847e6fB03A2A43fC7E58Cc75eB3","0x7E57ff3d0Bfb555549e72EE8516AA7f9543E0c9e","0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae","0x0961C1daC3EA0d1ac3Ea3d719f0D0CfC00c2D9d3","0x11fa6816c6b4808dabeb095dbdaa29a1328f9e6a","0xda9dfa130df4de4673b89022ee50ff26f6ea73cf","0xe92d1a43df510f82c66382592a047d288f85226f","0x44E9E7f7e95a976b8782F5e468e182efeb2B9392","0x6A1B7B817D2E620e7bc68332e044D81B0088Dcb7","0xa0a8f86d025f3c9651b6d0840167616e0b365e83","0x742d35cc6634c0532925a3b844bc454e4438f44e","0xa8FA18088693705B27DFfb11EAE7fb506e5d9DAE","0x18124882f16daa081871e2a66822A3D4DC4EE023","0x06617d1786876eee46054ad6db59bdff96d5759c","0x5a52e96bacdabb82fd05763e25335261b270efcb","0x06883614823CD2567f0A55afF9b7A0E96CFcD424","0x0716a17fbaee714f1e6ab0f9d59edbc5f09815c0","0xf977814e90da44bfa03b6295a0616a897441acec","0xbe0eb53f46cd790cd13851d5eff43d12404d33e8","0x72ae3a81c78cec12579e9844b7821af418fbdbc2","0x5e9121629AAA8558e0ed60A7E0d8F4e7b00eBd16","0x11fa6816c6b4808dabeb095dbdaa29a1328f9e6a","0x00000000219ab540356cbb839cbe05303d7705fa","0x828103b231b39fffce028562412b3c04a4640e64","0xd5268a476aadd1a6729df5b3e5e8f2c1004139af","0x3262f13a39efaca789ae58390441c9ed76bc658a","0x2faf487a4414fe77e2327f0bf4ae2a264a776ad2","0x7ead3a4361bd26a20deb89c9470be368ee9cb6f1","0xb9fa6e54025b4f0829d8e1b42e8b846914659632","0x19d599012788b991ff542f31208bab21ea38403e","0x4b4a011c420b91260a272afd91e54accdafdfc1d","0x554f4476825293d4ad20e02b54aca13956acc40a","0x99c9fc46f92e8a1c0dec1b1747d010903e884be1","0x756d64dc5edb56740fc617628dc832ddbcfd373c","0xe92d1a43df510f82c66382592a047d288f85226f","0xe92d1a43df510f82c66382592a047d288f85226f","0x59448fe20378357f206880c58068f095ae63d5a5","0x59448fe20378357f206880c58068f095ae63d5a5"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Get all the love and attention you deserve from our Rich Goddesses."; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeicqg6egjxtzcyuozi2g3xdvnihxqvaqin77d6lq4nvjm54bacsi4m"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "RG",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/mandyc852",
  creators: [
    {
      address: "0x6a81E64f4E6E3434b384b80B29c39F138Bac115e",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
