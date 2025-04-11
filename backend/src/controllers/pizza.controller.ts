import { NextFunction, Request, Response } from "express";

import { StatusCodesEnum } from "../enums/status-codes.enum";
import { IPizzaCreateDTO, IPizzaQuery } from "../interfaces/pizza.interface";
import { pizzaService } from "../services/pizza.service";

class PizzaController {
    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const query = req.query as any as IPizzaQuery;
            const data = await pizzaService.getAll(query);
            res.status(StatusCodesEnum.OK).json(data);
        } catch (e) {
            next(e);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const pizza = req.body as IPizzaCreateDTO;
            const data = await pizzaService.create(pizza);
            res.status(StatusCodesEnum.CREATED).json(data);
        } catch (e) {
            next(e);
        }
    }
}

export const pizzaController = new PizzaController();
