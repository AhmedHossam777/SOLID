import { PaymentMethod } from './PaymentMethod';

export class BankPayment implements PaymentMethod {
	processPayment(amount: number) {
		console.log(`processing bank payment of ${amount}`);
	}
}
