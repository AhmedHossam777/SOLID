> Software Entities like classes, functions, modules ...etc should be open for extension closed for modification

Ex of bad approach:
if we have a circle and rectangle class and we have a area calculator class

=> Circle.ts:

```ts
export class Circle{
    radius: number;
    type = 'Circle';
}
```

=> Rectangle.ts:

```ts
export class Rectangle
{
    width: number;
    height: number;
    type = 'Rectangle';
}
```

=> AreaCalculator.ts

```ts
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

export class AreaCalculator {
    Area(shapes: any[]): number {
        let area = 0;
        for (const shape of shapes) {
            if (shape.type === 'Rectangle') {
                const rectangle = shape as Rectangle;
                area += rectangle.width * rectangle.height;
            }
            else {
                const circle = shape as Circle;
                area += circle.radius * circle.radius * Math.PI;
            }
        }
        return area;
    }
}
```

=> this is a violation of the open-close principle as if we have more shapes we will have to modify the AreaCalculator class and the area method

---

## Solution

- First create an interface called `Shape` : it will contain `area` method

```ts
export interface Shape {
	area(): number;
}
```

- Then implement the interface to the circle and rectangle classes and create the area method inside it
    => Circle:

```ts
import { Shape } from './Shape';

export class Circle implements Shape {
	constructor(private radius: number) {}

	area(): number {
		return this.radius * this.radius * Math.PI;
	}
}
```

=> Rectangle:

```ts
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
```

- Now you can make use of the area method to get the area of each shape at `AreaCalculator`
    => AreaCalculator:

```ts
import { Shape } from './Shape';

export class AreaCalculator {
	constructor(private shape: Shape) {}
	area(): number {
		return this.shape.area();
	}
}

```
