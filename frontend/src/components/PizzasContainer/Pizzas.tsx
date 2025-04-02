import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {pizzaActions} from "../../redux/slices/pizzaSlice";
import {useEffect} from "react";
import {Pizza} from "./Pizza";

const Pizzas = () => {
        const {pizzas,trigger} = useAppSelector(state => state.pizzas);
        const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pizzaActions.getAll())
    }, [dispatch, trigger]);

    return (
        <div>
            {pizzas.map(pizza=> <Pizza key={pizza._id} pizza={pizza}/>)}
        </div>
    );
};

export {Pizzas};