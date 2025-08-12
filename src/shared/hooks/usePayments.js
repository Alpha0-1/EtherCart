import { processPayment } from '../services/payment/paymentProcessor.js';

export function usePayments() {
  const checkout = (args) => processPayment(args);
  return { checkout };
}

