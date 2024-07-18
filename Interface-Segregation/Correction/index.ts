import { Car } from './Car';
import { Plane } from './Plane';

console.log('Car: ...');

const car = new Car();
car.setColor('red');
car.setPrice(70000);
car.start();
car.stop();

console.log('Plane: ...');

const plane = new Plane();
plane.setPrice(1000000);
plane.setColor('white');
plane.start();
plane.stop();
plane.fly();
