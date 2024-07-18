import { User } from './User';

const user = new User('ahmed', 'ahmed@email.com');

user.saveToDatabase();
user.printUserDetails();
