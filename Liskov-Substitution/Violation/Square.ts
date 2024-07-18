import { Shape } from './Shape';

export class Square extends Shape {
	private side: number = 0;
	setHeight(height: number): void {
		this.side = height;
	}
	setWidth(width: number): void {
		this.side = width;
	}

	getArea(): number {
		return this.side * this.side;
	}
}
