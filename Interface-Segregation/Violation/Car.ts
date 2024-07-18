import { Vehicle } from './Vehicle';
export class Car implements Vehicle {
	private color: string;
	private price: number;

	setColor(color: string): void {
		this.color = color;
	}

	setPrice(price: number): void {
		this.price = price;
	}

	start(): void {
		console.log('Car starts');
	}

	stop(): void {
		console.log('Car stops');
	}

	fly(): void {}
}
