import joi from "joi";

export class AuthValidator {
    private static refresh = joi.string().trim();

    public static refreshToken = joi.object({
        refreshToken: this.refresh.required(),
    });
}
