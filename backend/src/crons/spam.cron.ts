import { CronJob } from "cron";

import { emailConstants } from "../constants/email.constants";
import { EmailEnum } from "../enums/email.enum";
import { User } from "../models/user.model";
import { emailService } from "../services/email.service";

const handler = async () => {
    try {
        const users = await User.find();

        for (let user of users) {
            const userName = user.name;
            const email = user.email;
            await emailService.sendEmail(
                email,
                emailConstants[EmailEnum.SPAM],
                {
                    name: userName,
                },
            );
        }
    } catch (e) {
        console.error(e);
    }
};

export const spamCron = new CronJob("0 * * * * *", handler);
