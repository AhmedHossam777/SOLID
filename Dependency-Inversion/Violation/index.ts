import { PaymentProcessor } from './PaymentProcessor';

const paymentProcessor = new PaymentProcessor();

paymentProcessor.processBankTransferPayment(300);
paymentProcessor.processCreditCardPayment(300);
paymentProcessor.processPayPalPayment(300);
