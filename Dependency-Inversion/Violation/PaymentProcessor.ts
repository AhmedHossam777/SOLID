import {BankPayment} from './BankPayment';
import {CreditCardPayment} from './CreditCardPayment';
import {PaypalPayment} from './PaypalPayment';


export class PaymentProcessor {
	private creditCardPayment: CreditCardPayment;
	private payPalPayment: PaypalPayment;
	private bankTransferPayment: BankPayment;

	constructor() {
		this.creditCardPayment = new CreditCardPayment();
		this.payPalPayment = new PaypalPayment();
		this.bankTransferPayment = new BankPayment();
	}

	processCreditCardPayment(amount: number): void {
		this.creditCardPayment.processPayment(amount);
	}

	processPayPalPayment(amount: number): void {
		this.payPalPayment.processPayment(amount);
	}

	processBankTransferPayment(amount: number): void {
		this.bankTransferPayment.processPayment(amount);
	}
}