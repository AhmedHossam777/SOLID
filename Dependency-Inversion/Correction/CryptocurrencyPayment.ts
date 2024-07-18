import { PaymentMethod } from './PaymentMethod';

export class CryptocurrencyPayment implements PaymentMethod {
	processPayment(amount: number): void {
		console.log(`Processing cryptocurrency payment of ${amount}`);
	}
}
