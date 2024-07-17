=> Class should only have one reason to change
=> that means that a class should only do one task we don not want multitasking

if we a have a book class

```ts
export class Book {
	constructor(
		public name: string,
		public authorName: string,
		public year: number,
		public price: number,
		public isbn: string
	) {}
}
```

and have a Invoice class that is responsible for Invoice Logic:

```ts
import { Book } from './Book';

class Invoice {
	constructor(
		private book: Book,
		private quantity: number,
		private discountRate: number,
		private taxRate: number,
		private total: number
	) {}

	calculateTotal(): number {
		const price: number =
			(this.book.price - this.book.price * this.discountRate) * this.quantity;

		const priceWithTaxes: number = price * (1 + this.taxRate);

		return priceWithTaxes;
	}

	printInvoice(): void {
		console.log(`${this.quantity} x ${this.book.name} ${this.book.price} $`);
		console.log(`Discount Rate: ${this.discountRate}`);
		console.log(`Tax Rate: ${this.taxRate}`);
		console.log(`Total: ${this.total}`);
	}

	saveToFile(filename: string): void {
		// Creates a file with given name and writes the invoice
	}
}
```

=> As you see the invoice class is doing a lot of tasks to implement the singe responsible principle we will make a class that will be responsible for implementing the logic for each one service

to solve that we will new classes that's responsible of each functionality
What we will create:

- Book -> Already exist
- Invoice Manager
- PaymentManager -> responsible of the payment functionality
- PersistenceManager -> responsible of the persistence functionality
- PrintManager -> responsible of the print functionality

=> PaymentManager :

```ts
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
```

=> PrintManager.ts

```ts
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
```

=> PersistenceManager.ts

```ts
export class PersistInvoice {
	saveToFile(filename: string): void {
		// Creates a file with given name and writes the invoice
	}
}
```

=> then the invoice class will use all of them :
InvoiceManager.ts:

```ts
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
```
