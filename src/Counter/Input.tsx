import React, {ChangeEvent} from 'react';
import s2 from './CounterValues.module.css'


type InputType = {
    error: boolean
    value: number
    title: string
    callBack: (value: number) => void

}
const Input = (props: InputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(Number(e.currentTarget.value))
    }
    return (
        <div>


            <input className={props.error ? s2.red : s2.input} type='number' value={props.value} onChange={onChangeHandler}/>


        </div>
    );
};

export default Input;