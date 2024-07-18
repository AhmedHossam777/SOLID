import { User } from './User';
import { UserFormatter } from './UserFormatter';
import { UserPrinter } from './UserPrinter';
import { UserRepository } from './UserRepository';

const user = new User('ahmed', 'ahmed@email.com');

const userRepository = new UserRepository(user);
const userFormatter = new UserFormatter(user);
const userPrinter = new UserPrinter();

userRepository.saveToDatabase();

const userDetails = userFormatter.formatUserDetails();

userPrinter.printUserDetails(userDetails);
