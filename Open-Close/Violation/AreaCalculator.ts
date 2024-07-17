import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

class AreaCalculator {
	area(shape: Circle | Rectangle): number {
		let shapeArea = 0;

		if (shape.type === 'rectangle') {
			const rectangle = shape as Rectangle;
			shapeArea = rectangle.width * rectangle.height;
		} else if (shape.type === 'circle') {
			const circle = shape as Circle;
			shapeArea = circle.radius * circle.radius * Math.PI;
		}

		return shapeArea;
	}
}
