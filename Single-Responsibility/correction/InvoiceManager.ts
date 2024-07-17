import { Book } from './Book';
import { PrintManager } from './PrintManager';
import { PaymentManager } from './PaymentManager';
import { PersistInvoice } from './PersistenceManager';

export class Invoice {
	constructor(
		public book: Book,
		public quantity: number,
		public discountRate: number,
		public taxRate: number,
		public total: number,
		public printManager: PrintManager,
		public paymentManager: PaymentManager,
		public persistInvoice: PersistInvoice
	) {}

	getTotal(): number {
		return this.paymentManager.calculateTotal();
	}

	printInvoice(): void {
		this.printManager.print();
	}

	saveToFile(filename: string): void {
		// Creates a file with given name and writes the invoice
		this.persistInvoice.saveToFile(filename);
	}
}
