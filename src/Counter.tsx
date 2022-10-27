import React from 'react';
import s from './Counter.module.css'
import {Buttons} from './Buttons';

type CounterType = {
    increase: () => void
    value: number
    resetCounter: () => void
}
export const Counter = (props: CounterType) => {
    return (
        <div className={s.box}>
            <div className={s.counter}>
                <div className={props.value === 5 ? s.maxNumber : s.number}>{props.value}</div>
            </div>
            <div className={s.buttonBox}>
                <Buttons increase={props.increase} resetCounter={props.resetCounter} value={props.value}/>
            </div>
        </div>

    );
};

