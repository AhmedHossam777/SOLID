import { PaymentMethod } from './PaymentMethod';

export class PaypalPayment implements PaymentMethod {
	processPayment(amount: number): void {
		console.log(`processing paypal payment of ${amount}`);
	}
}
