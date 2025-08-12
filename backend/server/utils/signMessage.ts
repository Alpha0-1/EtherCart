import { ethers } from 'ethers';

export const signMessage = (payload: object, privateKey: string): string => {
  const message = JSON.stringify(payload);
  return new ethers.Wallet(privateKey).signMessage(message);
};

export const verifySignature = (address: string, message: string, signature: string): boolean => {
  try {
    const recovered = ethers.verifyMessage(message, signature);
    return recovered.toLowerCase() === address.toLowerCase();
  } catch {
    return false;
  }
};
