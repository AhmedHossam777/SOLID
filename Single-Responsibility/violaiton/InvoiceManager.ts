import { Book } from "./Book";

class Invoice {
  constructor(
    private book: Book,
    private quantity: number,
    private discountRate: number,
    private taxRate: number,
    private total: number,
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
