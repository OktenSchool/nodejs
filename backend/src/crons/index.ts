// import { testCron } from "./test.cron";

import { removeOldTokensCron } from "./remove-old-tokens.cron";
// import { spamCron } from "./spam.cron";

export const cronRunner = async () => {
    // testCron.start();
    removeOldTokensCron.start();
    // spamCron.start();
};
