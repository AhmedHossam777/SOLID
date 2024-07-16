import { Invoice } from './InvoiceManager';

export class PaymentManager {
	constructor(private invoice: Invoice) {}

	calculateTotal(): number {
		const price: number =
			(this.invoice.book.price -
				this.invoice.book.price * this.invoice.discountRate) *
			this.invoice.quantity;

		const total: number = price * (1 + this.invoice.taxRate);

		return total;
	}
}
