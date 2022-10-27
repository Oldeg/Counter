import React from 'react';
import s from './Counter.module.css';
import {Button} from './UniversalButton';

type ButtonsType = {
    value: number
    increase: () => void
    resetCounter: () => void
}
export const Buttons = (props: ButtonsType) => {
    const resetDisabled = props.value === 0;
    const incDisabled = props.value === 5;
    return (
        <div>
            <span className={s.button1}>
                <Button
                    name={'inc'}
                    callback={props.increase}
                    disabled={incDisabled}/>
            </span>
            <span className={s.button2}>
                <Button
                    name={'reset'}
                    callback={props.resetCounter}
                    disabled={resetDisabled}/>
            </span>
        </div>
    );
};

