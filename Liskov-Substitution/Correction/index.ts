import { Rectangle } from './Rectangle';
import { Shape } from './Shape';
import { Square } from './Square';

const printShapeArea = (shape: Shape) => {
	console.log(`Area: ${shape.getArea()}`);
};

const rectangle = new Rectangle();
rectangle.setHeight(5);
rectangle.setWidth(10);

const square = new Square();
square.setSide(9);

printShapeArea(rectangle);
printShapeArea(square);
