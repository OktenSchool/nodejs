import joi from "joi";

import { RegexEnum } from "../enums/regex.enum";

export class AuthValidator {
    private static refresh = joi.string().trim();
    private static password = joi.string().regex(RegexEnum.PASSWORD);

    public static refreshToken = joi.object({
        refreshToken: this.refresh.required(),
    });

    public static validatePassword = joi.object({
        password: this.password.required(),
    });
}
