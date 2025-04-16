import { EmailEnum } from "../enums/email.enum";

type IEmailData = {
    subject: string;
    template: string;
};

type IEmailConstants<T extends Record<string, string>> = {
    [K in keyof T]: IEmailData;
};

export const emailConstants: IEmailConstants<typeof EmailEnum> = {
    [EmailEnum.WELCOME]: {
        subject: "Welcome",
        template: "welcome",
    },
    [EmailEnum.ACTIVATE]: {
        subject: "Activate Account",
        template: "activate",
    },
    [EmailEnum.RECOVERY]: {
        subject: "Recovery password",
        template: "recovery",
    },
    [EmailEnum.SPAM]: {
        subject: "Spam",
        template: "spam",
    },
};

export type { IEmailConstants, IEmailData };
