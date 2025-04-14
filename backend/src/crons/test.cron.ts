import { CronJob } from "cron";

const handler = async () => {
    console.log("Hello from cron");
};

export const testCron = new CronJob("*/10 * * * * *", handler);
