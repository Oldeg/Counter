import React from 'react';
import s from './Counter.module.css'
import {UniversalButton} from "./UniversalButton";
import {PARAMETERS_MAX_VALUE, PARAMETERS_START_VALUE} from "../App";

type CounterType = {
    error: boolean
    withoutError: boolean
    increase: () => void
    startValue: number
    maxValue: number
    counter: number
    resetCounter: () => void
    resetDisabled: boolean
    increaseDisabled: boolean
}
export const Counter = (props: CounterType) => {
    const counterValue = props.counter === props.maxValue ? s.maxNumber : s.counterValue;
    const incorrectValue = props.startValue === props.maxValue || props.error;
    const anotherValues = (props.startValue !== PARAMETERS_START_VALUE || props.maxValue !== PARAMETERS_MAX_VALUE) && props.withoutError

    return (

        <div className={s.box}>

            <div className={s.counter}>
                {incorrectValue ? <h2 className={s.error}>Incorrect value!</h2>
                : anotherValues ? <h2 className={s.withoutError}>Enter values and press 'set'</h2>
                : <h2 className={counterValue}>{props.counter}</h2>}
            </div>
            <div className={s.buttonBox}>
                <div className={s.button1}>
                    <UniversalButton callback={props.increase}
                                     name={'inc'}
                                     disabled={props.error ? props.increaseDisabled : props.increaseDisabled}/>
                </div>
                <div className={s.button2}>
                    <UniversalButton callback={props.resetCounter}
                                     name={'res'} disabled={props.error ? props.resetDisabled : props.resetDisabled}/>
                </div>
            </div>
        </div>


    );
};

