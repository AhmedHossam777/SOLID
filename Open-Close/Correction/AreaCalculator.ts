import { Shape } from './Shape';

export class AreaCalculator {
	constructor(private shape: Shape) {}
	area(): number {
		return this.shape.area();
	}
}
