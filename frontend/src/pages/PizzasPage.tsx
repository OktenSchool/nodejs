import {Pizzas} from "../components/PizzasContainer/Pizzas";
import {PizzaCreate} from "../components/PizzasContainer/PizzaCreate";

const PizzasPage = () => {
    return (
        <div>
            <PizzaCreate/>
            <hr/>
            <Pizzas/>
        </div>
    );
};

export {PizzasPage};