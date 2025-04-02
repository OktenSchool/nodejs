import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces/userInterface";
import {IAuth} from "../../interfaces/authInterface";
import {authService} from "../../service/authService";

interface IState {
    me: IUser,
    error: boolean
}

const initialState: IState = {
    me: null,
    error: null
}

const login = createAsyncThunk<IUser, { user: IAuth }>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user)
        } catch (e) {
            return rejectWithValue(e)
        }

    }
)
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload
            })
            .addMatcher(isRejected(login), state => {
                state.error = true
            })
            .addMatcher(isFulfilled(login), state => {
                state.error = false
            })
});

const {reducer: authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    login
}

export {
    authReducer,
    authActions
}