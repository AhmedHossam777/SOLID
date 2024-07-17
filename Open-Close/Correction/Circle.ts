import { Shape } from './Shape';

export class Circle implements Shape {
	constructor(private radius: number) {}

	area(): number {
		return this.radius * this.radius * Math.PI;
	}
}
