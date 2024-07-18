> No code should be forced to depend on method it does not use. ISP split interfaces that are very large into smaller specific ones

## Violation

=> If we have 2 classes `Car` and `Plane` that implement one big interface `Vehicle`

=> Vehicle:

```ts
export interface Vehicle {
	setColor(color: string): void;
	setPrice(price: number): void;

	start(): void;
	stop(): void;
	fly(): void;
}
```

=> Plane:

```ts
import { Vehicle } from './Vehicle';

export class Plane implements Vehicle {
	private color: string;
	private price: number;
	setColor(color: string): void {
		this.color = color;
	}
	setPrice(price: number): void {
		this.price = price;
	}
	start(): void {
		console.log('Plane starts');
	}
	stop(): void {
		console.log('Plane stops');
	}
	fly(): void {
		console.log('Plan flies');
	}
}
```

=> Car:

```ts
import { Vehicle } from './Vehicle';
export class Car implements Vehicle {
	private color: string;
	private price: number;

	setColor(color: string): void {
		this.color = color;
	}

	setPrice(price: number): void {
		this.price = price;
	}

	start(): void {
		console.log('Car starts');
	}

	stop(): void {
		console.log('Car stops');
	}

	fly(): void {}
}
```

---

## The Problem:

The car and plane is implement the Vehicle interface although the car does not fly so the fly method will be empty on the car class and that is a violation to ISP as the car is forced to implement a method it does not use

---

## Refactor :

we will create new two interfaces `Movable` and `Flyable` by that we will have 3 interfaces

=> Vehicle:

```ts
export interface Vehicle {
	setColor(color: string): void;
	setPrice(price: number): void;
}
```

=> Movable:

```ts
export interface Movable {
	start(): void;
	stop(): void;
}
```

=> Flyable:

```ts
export interface Flyable {
	fly(): void;
}
```

> Now we can implement the Vehicle and Movable only on Car class and implement all 3 interfaces on Plane class

Car:

```ts
import { Movable } from './Movable';
import { Vehicle } from './Vehicle';
export class Car implements Vehicle, Movable {
	private color: string = '';
	private price: number = 0;

	setColor(color: string): void {
		this.color = color;
	}

	setPrice(price: number): void {
		this.price = price;
	}

	start(): void {
		console.log('Car starts');
	}

	stop(): void {
		console.log('Car stops');
	}
}
```

=> Plane:

```ts
import { Flyable } from './Flyable';
import { Movable } from './Movable';
import { Vehicle } from './Vehicle';

export class Plane implements Vehicle, Movable, Flyable {
	private color: string = '';
	private price: number = 0;
	setColor(color: string): void {
		this.color = color;
	}
	setPrice(price: number): void {
		this.price = price;
	}
	start(): void {
		console.log('Plane starts');
	}
	stop(): void {
		console.log('Plane stops');
	}
	fly(): void {
		console.log('Plan flies');
	}
}
```

=> By that the Car class does not have to create a method that it won't use
