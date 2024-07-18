import { Shape } from './Shape';

export abstract class Quadrilateral extends Shape {
	abstract setHeight(height: number): void;
	abstract setWidth(width: number): void;
}
