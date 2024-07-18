import { PaymentMethod } from './PaymentMethod';

export class PaymentProcessor {
	constructor(private paymentMethod: PaymentMethod) {}

	processPayment(amount: number) {
		this.paymentMethod.processPayment(amount);
	}
}
