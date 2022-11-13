
import {combineReducers, createStore} from "redux";
import {commonReducer} from "./Reducers/commonReducer";
import {loadState, saveState} from "../localStorage";
import throttle from "lodash.throttle"

const rootReducer = combineReducers({
    commonReducer: commonReducer
})
const persistedState = loadState();
export const store = createStore(rootReducer,persistedState)

store.subscribe(throttle(()=>{

    saveState({
        commonReducer: store.getState().commonReducer
    })
}, 1000))
export type CounterRootStateType = ReturnType<typeof rootReducer>

