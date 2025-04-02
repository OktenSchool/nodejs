import joi from "joi";

export class PizzaValidator {
    private static name = joi.string().min(2).max(255).trim();
    private static price = joi.number().min(1).max(1_000_000);
    private static diameter = joi.number().min(1).max(255);

    public static create = joi.object({
        name: this.name.required(),
        price: this.price.required(),
        diameter: this.diameter.required(),
    });
}
