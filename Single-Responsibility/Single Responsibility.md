> A class should have only one reason to change, meaning it should have only one job or responsibility. This principle helps in making the code more robust, easier to maintain, and more understandable.

### Example Scenario

Let's consider a scenario where we have a class that manages user accounts in a system. The class handles user data and also handles the formatting and printing of user information.

### Without SRP (Violation)

Here’s an example where the SRP is violated:

```typescript
class User {
  constructor(public name: string, public email: string) {}

  saveToDatabase(): void {
    // Code to save user data to the database
    console.log(`Saving user ${this.name} to the database.`);
  }

  formatUserDetails(): string {
    // Code to format user details
    return `Name: ${this.name}, Email: ${this.email}`;
  }

  printUserDetails(): void {
    // Code to print user details
    console.log(this.formatUserDetails());
  }
}

const user = new User("Alice", "alice@example.com");
user.saveToDatabase();
user.printUserDetails();
```

### Why This is a Violation of SRP

1. **Multiple Responsibilities**: The `User` class has multiple responsibilities:
   - Managing user data
   - Saving user data to the database
   - Formatting user details
   - Printing user details
   
2. **Reasons to Change**: The class has more than one reason to change:
   - Changes to user data management
   - Changes to database saving logic
   - Changes to formatting user details
   - Changes to printing user details
   
This makes the class harder to maintain and extend. Any change in one responsibility could impact others, leading to potential bugs.

### Applying SRP

To adhere to the SRP, we should split the responsibilities into separate classes:

```typescript
class User {
  constructor(public name: string, public email: string) {}
}

class UserRepository {
  saveToDatabase(user: User): void {
    // Code to save user data to the database
    console.log(`Saving user ${user.name} to the database.`);
  }
}

class UserFormatter {
  formatUserDetails(user: User): string {
    // Code to format user details
    return `Name: ${user.name}, Email: ${user.email}`;
  }
}

class UserPrinter {
  printUserDetails(details: string): void {
    // Code to print user details
    console.log(details);
  }
}

const user = new User("Alice", "alice@example.com");
const userRepository = new UserRepository();
const userFormatter = new UserFormatter();
const userPrinter = new UserPrinter();

userRepository.saveToDatabase(user);
const userDetails = userFormatter.formatUserDetails(user);
userPrinter.printUserDetails(userDetails);
```

### Explanation

1. **Class `User`**: This class now only holds user data. It has a single responsibility: representing user information.

2. **Class `UserRepository`**: This class is responsible for saving user data to the database. It has a single responsibility: managing data storage for users.

3. **Class `UserFormatter`**: This class handles the formatting of user details. It has a single responsibility: formatting user information.

4. **Class `UserPrinter`**: This class is responsible for printing user details. It has a single responsibility: handling the printing of information.

### Benefits of SRP

1. **Ease of Maintenance**: Each class has a single responsibility, making it easier to understand, maintain, and extend.
2. **Reduced Risk of Bugs**: Changes in one responsibility do not affect other responsibilities, reducing the risk of introducing bugs.
3. **Reusability**: Classes with a single responsibility are more reusable in different contexts.
4. **Testability**: Smaller classes with focused responsibilities are easier to test.

By applying the SRP, we create a more modular, maintainable, and understandable codebase.