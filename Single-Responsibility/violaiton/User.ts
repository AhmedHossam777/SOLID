export class User {
	constructor(public name: string, public email: string) {}

	saveToDatabase(): void {
		console.log(`saving user ${this.name} to the database`);
	}

	formatUserDetails(): string {
		return `Name: ${this.name}, Email: ${this.email}`;
	}

	printUserDetails(): void {
		console.log(this.formatUserDetails());
	}
}
