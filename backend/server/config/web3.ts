import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

const INFURA_ID = process.env.INFURA_ID;
const ETHEREUM_NETWORK = process.env.ETHEREUM_NETWORK || 'goerli';

if (!INFURA_ID) {
  throw new Error('INFURA_ID is required in environment');
}

const provider = new ethers.JsonRpcProvider(
  `https://${ETHEREUM_NETWORK}.infura.io/v3/${INFURA_ID}`
);

export const web3Provider = () => provider;

// Contract addresses (to be deployed)
export const CONTRACTS = {
  EtherCartStore: process.env.CONTRACT_ETHERCART_STORE || '',
  PaymentProcessor: process.env.CONTRACT_PAYMENT_PROCESSOR || ''
};
