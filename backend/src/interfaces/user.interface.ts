import { RoleEnum } from "../enums/role.enum";
import { IBase } from "./base.interface";

interface IUser extends IBase {
    _id: string;
    email: string;
    password: string;
    role: RoleEnum;
    avatar: string;
    isActive: boolean;
    isDeleted: boolean;
    isVerified: boolean;
    name: string;
    surname: string;
    age: number;
}

interface IUserQuery {
    pageSize: number;
    page: number;
    search?: string;
    order?: string;
}

type IUserCreateDTO = Pick<
    IUser,
    "email" | "password" | "name" | "surname" | "age"
>;

type IUserUpdateDTO = Pick<IUser, "name" | "surname" | "age">;

export type { IUser, IUserCreateDTO, IUserQuery, IUserUpdateDTO };
