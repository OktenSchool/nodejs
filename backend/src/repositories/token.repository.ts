import { IToken, ITokenModel } from "../interfaces/token.interface";
import { Token } from "../models/token.model";

class TokenRepository {
    public create(tokenModel: ITokenModel): Promise<IToken> {
        return Token.create(tokenModel);
    }

    public findByParams(params: Partial<IToken>): Promise<IToken> {
        return Token.findOne(params);
    }
    public async deleteBeforeDate(date: Date): Promise<number> {
        const result = await Token.deleteMany({ createdAt: { $lt: date } });
        return result.deletedCount;
    }
}

export const tokenRepository = new TokenRepository();
