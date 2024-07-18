import { User } from './User';

export class UserFormatter {
	constructor(private user: User) {}

	formatUserDetails(): string {
		return `Username: ${this.user.name}, Email: ${this.user.email}`;
	}
}
