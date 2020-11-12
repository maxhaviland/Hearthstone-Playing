import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    username: string;
    fullName: string;
    email: string;
    password: string;
    active: boolean;
}
export declare const UserSchema: import("mongoose").Schema<any>;
