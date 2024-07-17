import { Shape } from './Shape';

export class Rectangle implements Shape {
	constructor(
		private width: number,
		private height: number,
	) {}

	area(): number {
		return this.height * this.width;
	}
}
