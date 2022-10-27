import React from 'react';
import s from './Counter.module.css'
type ButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}
export const Button = (props: ButtonType) => {
    return (
        <button onClick={props.callback}
                disabled={props.disabled}
                className={s.button}>{props.name}
        </button>
    );
};

