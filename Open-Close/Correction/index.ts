import { AreaCalculator } from './AreaCalculator';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

const circle = new Circle(5);
const rectangle = new Rectangle(5, 4);

const circleArea = new AreaCalculator(circle);
console.log(circleArea.area());

const rectangleArea = new AreaCalculator(rectangle);
console.log(rectangleArea.area());
