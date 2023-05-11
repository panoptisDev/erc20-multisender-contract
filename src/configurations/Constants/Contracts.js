import { CHAIN_ID } from "."

const { BSC_MAINNET, BSC_TESTNET } = CHAIN_ID

export const bscContracts = {
  MULTISENDER: {
    [BSC_MAINNET]: {
      address: "0x105b9D95299A493D0f148A6E3cd8A06471b93296",
      explorerUrl:
        "https://bscscan.com/address/0x105b9D95299A493D0f148A6E3cd8A06471b93296",
    },
    [BSC_TESTNET]: {
      address: "0x0CE5644c96e8d2CbB9cb0101e02e7f2c82135fA5",
      explorerUrl:
        "https://testnet.bscscan.com/address/0x0CE5644c96e8d2CbB9cb0101e02e7f2c82135fA5",
   },

  }
}  
