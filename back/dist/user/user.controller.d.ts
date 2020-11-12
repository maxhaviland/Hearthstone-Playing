import { UserService } from './user.service';
import { User } from './user.schema';
export declare class UserController {
    private service;
    constructor(service: UserService);
    getByUsername({ username }: {
        username: any;
    }): Promise<User>;
    create(user: User): Promise<any>;
    update(user: User, params: any): Promise<void>;
    remove(params: any): Promise<User>;
}
