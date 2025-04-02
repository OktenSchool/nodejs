import {IRes} from "../types/respType";
import {IPizza} from "../interfaces/pizzaInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const pizzaService = {
    create(data: IPizza): IRes<IPizza> {
        return apiService.post<IPizza>(urls.pizzas, data);
    },
    getAll(): IRes<IPizza[]> {
        return apiService.get(urls.pizzas)
    }


}

export {
    pizzaService
}