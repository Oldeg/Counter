import React from 'react';
import s from './Counter.module.css'
import {UniversalButton} from "./UniversalButton";
import {useDispatch, useSelector} from "react-redux";
import {CounterRootStateType} from "../Redux/store";
import {increaseAC, InitialStateType, resetCounterAC} from "../Redux/Reducers/commonReducer";


export const Counter = () => {
    const dispatch = useDispatch()
    const state = useSelector<CounterRootStateType, InitialStateType>(state => state.commonReducer)
    const increaseDisabled = state.counter === state.maxValue || state.error
    const resetDisabled = state.counter <= state.startValue
    const counterValue = state.counter === state.maxValue ? s.maxNumber : s.counterValue;
    const incorrectValue = state.setStartValue === state.setMaxValue || state.error;
    const anotherValues = (state.startValue !== state.setStartValue || state.maxValue !== state.setMaxValue) && state.withoutError

    return (

        <div className={s.box}>

            <div className={s.counter}>
                {incorrectValue ? <h2 className={s.error}>Incorrect value!</h2>
                    : anotherValues ? <h2 className={s.withoutError}>Enter values and press 'set'</h2>
                        : <h2 className={counterValue}>{state.counter}</h2>}
            </div>
            <div className={s.buttonBox}>
                <div className={s.button1}>
                    <UniversalButton callback={() => dispatch(increaseAC())}
                                     name={'inc'}
                                     disabled={state.error ? increaseDisabled : increaseDisabled}/>
                </div>
                <div className={s.button2}>
                    <UniversalButton callback={() => dispatch(resetCounterAC())}
                                     name={'res'} disabled={state.error ? resetDisabled : resetDisabled}/>
                </div>
            </div>
        </div>


    );
};

