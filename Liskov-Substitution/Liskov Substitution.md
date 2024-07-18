> The Liskov Substitution Principle (LSP) is one of the five SOLID principles of object-oriented design. It states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In other words, if class `S` is a subclass of class `T`, then objects of type `T` should be replaceable with objects of type `S` without altering the desirable properties of the program (correctness, task performed, etc.).

### Step 1: Define the Base Class and Subclasses

We start by defining a base class `Shape` with methods for setting dimensions and calculating the area.


```typescript
abstract class Shape {
  abstract setWidth(width: number): void;
  abstract setHeight(height: number): void;
  abstract getArea(): number;
}

class Rectangle extends Shape {
  private width: number = 0;
  private height: number = 0;

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  private side: number = 0;

  setWidth(width: number): void {
    this.side = width;
  }

  setHeight(height: number): void {
    this.side = height;
  }

  getArea(): number {
    return this.side * this.side;
  }
}
```

### Step 2: Identify the Problem

Here, `Square` and `Rectangle` both extend `Shape`. However, `Square` violates the Liskov Substitution Principle because setting the width of a square should also set the height to the same value, which is not the case in our base class design.

### Step 3: Refactor to Adhere to LSP

To adhere to LSP, we need to ensure that any subclass can replace the base class without altering the expected behavior. We can introduce a new base class for quadrilaterals and split the responsibility accordingly:

```typescript
abstract class Shape {
  abstract getArea(): number;
}

abstract class Quadrilateral extends Shape {
  abstract setWidth(width: number): void;
  abstract setHeight(height: number): void;
}

class Rectangle extends Quadrilateral {
  private width: number = 0;
  private height: number = 0;

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  private side: number = 0;

  setSide(side: number): void {
    this.side = side;
  }

  getArea(): number {
    return this.side * this.side;
  }
}
```

### Step 4: Implement the LSP-Compliant Solution

Now, we update our methods to ensure compliance with LSP. We introduce methods specifically tailored for `Square` and `Rectangle`, ensuring that each behaves correctly and can be substituted without issues.

```typescript
function printShapeArea(shape: Shape): void {
  console.log(`Area: ${shape.getArea()}`);
}

const rectangle = new Rectangle();
rectangle.setWidth(5);
rectangle.setHeight(10);
printShapeArea(rectangle); // Area: 50

const square = new Square();
square.setSide(5);
printShapeArea(square); // Area: 25
```

### Step 5: Explanation

1. **Base Class `Shape`**: The `Shape` class now only includes a method to calculate the area, ensuring that any shape must implement this method.

2. **Quadrilateral Class**: This class adds methods for setting width and height, specifically for shapes that need these properties.

3. **Rectangle Class**: Inherits from `Quadrilateral` and implements the methods for setting width and height, ensuring the area is calculated correctly.

4. **Square Class**: Inherits from `Shape` directly, but it has a method to set the side length, ensuring the area is calculated as side squared.

5. **Function `printShapeArea`**: This function can now handle any shape without concern for violating LSP, as each shape correctly implements its area calculation.

This example demonstrates the proper adherence to LSP by ensuring that each subclass (Rectangle and Square) can be used interchangeably with the base class (Shape) without unexpected behavior.