import { Invoice } from './InvoiceManager';

export class PrintManager {
	constructor(private invoice: Invoice) {}

	print() {
		console.log(
			`${this.invoice.quantity} x ${this.invoice.book.name} ${this.invoice.book.price} $`
		);
		console.log(`Discount Rate: ${this.invoice.discountRate}`);
		console.log(`Tax Rate: ${this.invoice.taxRate}`);
		console.log(`Total: ${this.invoice.total}`);
	}
}
