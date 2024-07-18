import { BankPayment } from './BankPayment';
import { CreditCardPayment } from './CreditCardPayment';
import { CryptocurrencyPayment } from './CryptocurrencyPayment';
import { PaymentProcessor } from './PaymentProcessor';
import { PaypalPayment } from './PaypalPayment';

const bankPayment = new BankPayment();
const creditCardPayment = new CreditCardPayment();
const paypalPayment = new PaypalPayment();
const cryptoPayment = new CryptocurrencyPayment();

const bankProcessor = new PaymentProcessor(bankPayment);
bankProcessor.processPayment(300);

const creditCardProcessor = new PaymentProcessor(creditCardPayment);
creditCardProcessor.processPayment(300);

const paypalProcessor = new PaymentProcessor(paypalPayment);
paypalProcessor.processPayment(300);

const cryptoProcessor = new PaymentProcessor(cryptoPayment);
cryptoProcessor.processPayment(300);
