import React from 'react';
import s from './Counter.module.css'
type ButtonType = {
    name: string
    disabled: boolean
    callback: () => void
}
export const UniversalButton = (props: ButtonType) => {
    return (
        <button onClick={props.callback}
                disabled={props.disabled}
                className={s.button}>{props.name}
        </button>
    );
};

