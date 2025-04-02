import { model, Schema } from "mongoose";

import { IPizza } from "../interfaces/pizza.interface";

const pizzaSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        diameter: { type: Number, required: true },
    },
    { timestamps: true, versionKey: false },
);

export const Pizza = model<IPizza>("pizza", pizzaSchema);
