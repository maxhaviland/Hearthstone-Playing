import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, User } from './user.schema';
import { Model } from 'mongoose';
import { exception } from 'console';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async create(user: User) {
    const result = await new this.userModel(user).save();
    return result.id;
  }

  async findById(id: number): Promise<User> {
    try {
      return await this.userModel.findById(id);
    } catch (error) {
      throw new NotFoundException('could not found user.');
    }
  }

  async findByUsername(username: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({
        username,
        active: true,
      });

      if (!user) throw new exception();

      return user;
    } catch (error) {
      throw new NotFoundException('could not found user.');
    }
  }

  async update(id: number, user: User) {
    let updateUser: User;
    try {
      updateUser = await this.userModel.findOneAndUpdate({ _id: id }, user);
    } catch (error) {
      throw error;
    } finally {
      if (!updateUser) {
        throw new NotFoundException('could not found user.');
      }
    }
  }

  async remove(user: User) {
    return user;
  }
}
