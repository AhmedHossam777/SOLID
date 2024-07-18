export interface PaymentMethod {
	processPayment(amount: number): void;
}
