import { PaymentMethod } from './PaymentMethod';

export class CreditCardPayment implements PaymentMethod {
	processPayment(amount: number): void {
		console.log(`Processing credit card payment of ${amount}`);
	}
}
