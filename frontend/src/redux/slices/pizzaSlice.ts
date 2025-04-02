import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPizza} from "../../interfaces/pizzaInterface";
import {pizzaService} from "../../service/pizzaService";
interface IState{
    pizzas:IPizza[]
}

const initialState:IState = {
    pizzas:[]
}

const getAll = createAsyncThunk<IPizza[], void>(
    'pizzaSlice/getAll',
    async (_, {rejectWithValue})=>{
        try {
            const {data} = await pizzaService.getAll();
            return data
        }catch (e){
            return rejectWithValue(e)
        }
    }
);
const create = createAsyncThunk<IPizza, {pizza: IPizza }>(
    'pizzaSlice/create',
    async ({pizza}, {rejectWithValue})=>{
        try {
            const {data} = await pizzaService.create(pizza);
            return data
        }catch (e){
            return rejectWithValue(e)
        }
    }
);
const pizzaSlice = createSlice({
    name:'pizzaSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.pizzas =action.payload
            })
});