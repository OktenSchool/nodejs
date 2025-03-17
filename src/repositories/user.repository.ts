import { IUser, IUserDTO } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
    public getAll(): Promise<IUser[]> {
        return User.find();
    }
    public create(user: IUserDTO): Promise<IUser> {
        return User.create(user);
    }
    public getById(userId: string): Promise<IUser> {
        return User.findById(userId);
    }
    public updateById(userId: string, user: IUserDTO): Promise<IUser> {
        return User.findByIdAndUpdate(userId, user, { new: true });
    }
    public deleteById(userId: string): Promise<IUser> {
        return User.findByIdAndDelete(userId);
    }
}

export const userRepository = new UserRepository();
