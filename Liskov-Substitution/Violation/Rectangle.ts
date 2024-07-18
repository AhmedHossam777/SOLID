import { Shape } from './Shape';

export class Rectangle extends Shape {
	private height: number = 0;
	private width: number = 0;
	setHeight(height: number): void {
		this.height = height;
	}
	setWidth(width: number): void {
		this.width = width;
	}
	getArea(): number {
		return this.width * this.height;
	}
}
