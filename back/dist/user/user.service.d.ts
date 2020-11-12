import { UserDocument, User } from './user.schema';
import { Model } from 'mongoose';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(user: User): Promise<any>;
    findById(id: number): Promise<User>;
    findByUsername(username: string): Promise<User>;
    update(id: number, user: User): Promise<void>;
    remove(user: User): Promise<User>;
}
