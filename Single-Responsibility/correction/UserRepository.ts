import { User } from './User';

export class UserRepository {
	constructor(private user: User) {}

	saveToDatabase() {
		console.log(`saving user ${this.user.name} to the database`);
	}
}
