export interface IUser {
    _id: string;
    name: string;
    surname: string;
    age: number;
    createdAt: Date;
    updatedAt: Date;
}

export type IUserDTO = Pick<IUser, "name" | "surname" | "age">;
