import { IUser, IUserDTO } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

class UserService {
    public getAll(): Promise<IUser[]> {
        return userRepository.getAll();
    }

    public create(user: IUserDTO): Promise<IUser> {
        return userRepository.create(user);
    }

    public getById(userId: string): Promise<IUserDTO> {
        return userRepository.getById(userId);
    }
    public updateById(userId: string, user: IUserDTO): Promise<IUser> {
        return userRepository.updateById(userId, user);
    }
    public deleteById(userId: string): Promise<IUser> {
        return userRepository.deleteById(userId);
    }
}

export const userService = new UserService();
