import { Flyable } from './Flyable';
import { Movable } from './Movable';
import { Vehicle } from './Vehicle';

export class Plane implements Vehicle, Movable, Flyable {
	private color: string = '';
	private price: number = 0;
	setColor(color: string): void {
		this.color = color;
	}
	setPrice(price: number): void {
		this.price = price;
	}
	start(): void {
		console.log('Plane starts');
	}
	stop(): void {
		console.log('Plane stops');
	}
	fly(): void {
		console.log('Plan flies');
	}
}
