import { Request, Response } from 'express';
import { web3Provider } from '../config/web3';
import { signMessage, verifySignature } from '../utils/signMessage';
import { ApiResponse } from '../utils/response';

export const verifyWallet = async (req: Request, res: Response) => {
  const { address, signature, message } = req.body;
  const expectedMessage = `Sign to login to EtherCart at ${Date.now()}`;

  if (message !== expectedMessage) {
    return res.status(400).json(ApiResponse.error('Invalid challenge'));
  }

  const isValid = verifySignature(address, message, signature);
  if (!isValid) {
    return res.status(401).json(ApiResponse.error('Invalid signature'));
  }

  // Generate JWT
  const token = signMessage({ address }, '1d');
  res.json(ApiResponse.success({ token, address }, 'Wallet verified'));
};

export const getWalletBalance = async (req: Request, res: Response) => {
  try {
    const { address } = (req as any).user;
    const provider = web3Provider();
    const balance = await provider.getBalance(address);
    const ethBalance = Number(ethers.formatEther(balance)).toFixed(4);

    res.json(ApiResponse.success({ balance: ethBalance }));
  } catch (err) {
    res.status(500).json(ApiResponse.error('Failed to fetch balance'));
  }
};
