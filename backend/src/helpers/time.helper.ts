import dayjs, { ManipulateType } from "dayjs";

interface IParseTime {
    value: number;
    unit: ManipulateType;
}
class TimeHelper {
    public parseLifeTime(str: string): IParseTime {
        const [value, unit] = str.split(" ");
        return {
            value: parseInt(value),
            unit: unit as ManipulateType,
        };
    }

    public subFromCurrentTime(value: number, unit: ManipulateType): Date {
        return dayjs().subtract(value, unit).toDate();
    }
}

export const timeHelper = new TimeHelper();
