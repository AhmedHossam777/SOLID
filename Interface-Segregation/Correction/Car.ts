import { Movable } from './Movable';
import { Vehicle } from './Vehicle';
export class Car implements Vehicle, Movable {
	private color: string = '';
	private price: number = 0;

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
}
