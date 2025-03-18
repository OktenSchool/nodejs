import { model, Schema } from "mongoose";

import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        age: { type: Number, required: true },
    },
    { timestamps: true, versionKey: false },
);

export const User = model<IUser>("user", userSchema);
