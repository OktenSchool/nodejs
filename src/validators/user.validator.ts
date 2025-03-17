import joi from "joi";

export class UserValidator {
    private static name = joi.string().min(3).max(10).trim();
    private static surname = joi.string().regex(/^[A-Z][a-z]{1,9}$/);
    private static age = joi.number().min(2).max(100);

    public static create = joi.object({
        name: this.name.required(),
        surname: this.surname.required(),
        age: this.age.required(),
    });

    public static update = joi.object({
        name: this.name.required(),
        surname: this.surname.required(),
        age: this.age.required(),
    });
}
