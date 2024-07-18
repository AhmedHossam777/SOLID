import { Shape } from './Shape';

export class Square extends Shape {
	private side: number = 0;

	setSide(side: number): void {
		this.side = side;
	}

	getArea(): number {
		return this.side * this.side;
	}
}
