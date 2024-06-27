require('dotenv').config();

import { sepolia } from "wagmi/chains";
import "@nomicfoundation/hardhat-toolbox";

/** @type import('hardhat/config').HardhatUserConfig */


// const NEXT_PUBLIC_PRIVATE_KEY = process.env.PRIVATE_KEY;
export const solidity = "0.8.0";
export const defaultNetwork = "hardhat";
export const networks = {
  hardhat: {},
  sepolia: {
    url: process.env.SEPOLIA_RPC_URL || "",
    accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    blockConfirmations: 3,
    chainId:11155111,
  },
};

