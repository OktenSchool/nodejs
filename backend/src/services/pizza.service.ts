import { IPizza, IPizzaCreateDTO } from "../interfaces/pizza.interface";
import { pizzaRepository } from "../repositories/pizza.repository";

class PizzaService {
    public getAll(): Promise<IPizza[]> {
        return pizzaRepository.getAll();
    }

    public create(pizza: IPizzaCreateDTO): Promise<IPizza> {
        return pizzaRepository.create(pizza);
    }
}

export const pizzaService = new PizzaService();
