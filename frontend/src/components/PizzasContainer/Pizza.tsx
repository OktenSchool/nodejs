import {FC, PropsWithChildren} from "react";
import {IPizza} from "../../interfaces/pizzaInterface";

interface IProps extends PropsWithChildren {
    pizza: IPizza
}

const Pizza: FC<IProps> = ({pizza}) => {
    const {name, price, diameter} = pizza;
    return (
        <div>
            <div>name:{name}</div>
            <div>price:{price}</div>
            <div>diameter:{diameter}</div>
        </div>
    );
};

export {Pizza};