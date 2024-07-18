> **1- High-level Modules should not depend on low level modules. Both should depend on abstractions.**

> **2- Abstractions should not depend on details. Details should depend on abstraction**


let's consider a scenario where we are developing a payment processing system that can handle different types of payments (e.g., credit card, PayPal, and bank transfer). 

### Without DIP (Violation)

Here's an example of the system without adhering to the Dependency Inversion Principle:

```typescript
class CreditCardPayment {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of ${amount}`);
  }
}

class PayPalPayment {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of ${amount}`);
  }
}

class BankTransferPayment {
  processPayment(amount: number): void {
    console.log(`Processing bank transfer payment of ${amount}`);
  }
}

class PaymentProcessor {
  private creditCardPayment: CreditCardPayment;
  private payPalPayment: PayPalPayment;
  private bankTransferPayment: BankTransferPayment;

  constructor() {
    this.creditCardPayment = new CreditCardPayment();
    this.payPalPayment = new PayPalPayment();
    this.bankTransferPayment = new BankTransferPayment();
  }

  processCreditCardPayment(amount: number): void {
    this.creditCardPayment.processPayment(amount);
  }

  processPayPalPayment(amount: number): void {
    this.payPalPayment.processPayment(amount);
  }

  processBankTransferPayment(amount: number): void {
    this.bankTransferPayment.processPayment(amount);
  }
}

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processCreditCardPayment(100);
paymentProcessor.processPayPalPayment(200);
paymentProcessor.processBankTransferPayment(300);
```

### Why This is a Violation of DIP

1. **High-Level Module Dependency**: The `PaymentProcessor` class is a high-level module, and it directly depends on the low-level modules `CreditCardPayment`, `PayPalPayment`, and `BankTransferPayment`. This makes the `PaymentProcessor` class rigid and difficult to maintain or extend.
   
2. **Tight Coupling**: Adding a new payment method (e.g., cryptocurrency) requires modifying the `PaymentProcessor` class, which violates the open/closed principle. This tight coupling makes the system less flexible.

3. **Difficult to Test**: Testing the `PaymentProcessor` class becomes cumbersome because you cannot easily mock or stub the payment methods.

### Applying DIP

To adhere to the Dependency Inversion Principle, we can introduce an abstraction for the payment methods:

```typescript
interface PaymentMethod {
  processPayment(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of ${amount}`);
  }
}

class PayPalPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of ${amount}`);
  }
}

class BankTransferPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing bank transfer payment of ${amount}`);
  }
}

class PaymentProcessor {
  private paymentMethod: PaymentMethod;

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  processPayment(amount: number): void {
    this.paymentMethod.processPayment(amount);
  }
}

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();
const bankTransferPayment = new BankTransferPayment();

const creditCardProcessor = new PaymentProcessor(creditCardPayment);
creditCardProcessor.processPayment(100);

const payPalProcessor = new PaymentProcessor(payPalPayment);
payPalProcessor.processPayment(200);

const bankTransferProcessor = new PaymentProcessor(bankTransferPayment);
bankTransferProcessor.processPayment(300);
```

### Explanation

1. **Interface `PaymentMethod`**: This interface declares a `processPayment` method. All payment methods implement this interface, providing their specific implementations of `processPayment`.

2. **Classes `CreditCardPayment`, `PayPalPayment`, `BankTransferPayment`**: These classes implement the `PaymentMethod` interface. They provide specific implementations for processing payments.

3. **Class `PaymentProcessor`**: This class depends on the `PaymentMethod` interface, not the specific implementations. The `PaymentProcessor` class is passed an instance of a class implementing `PaymentMethod` through its constructor.

4. **Dependency Injection**: When creating an instance of `PaymentProcessor`, you inject the specific payment method. This decouples the `PaymentProcessor` class from the specific implementations of the payment methods, adhering to the Dependency Inversion Principle.

By using DIP, we make the `PaymentProcessor` class more flexible, easier to maintain, and easier to test. Adding a new payment method (e.g., cryptocurrency) now only requires creating a new class that implements the `PaymentMethod` interface:

```typescript
class CryptocurrencyPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing cryptocurrency payment of ${amount}`);
  }
}

const cryptoPayment = new CryptocurrencyPayment();
const cryptoProcessor = new PaymentProcessor(cryptoPayment);
cryptoProcessor.processPayment(400);
```

This approach makes the code more modular, easier to test, and flexible to changes.