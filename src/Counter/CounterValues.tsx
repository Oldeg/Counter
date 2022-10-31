import React from 'react'
import s2 from './CounterValues.module.css'
import Input from "./Input";
import {UniversalButton} from "./UniversalButton";


type CounterValueType = {
    maxValue: number
    startValue: number
    error: boolean
    changeCounterValues: () => void
    startCallback: (value: number) => void
    maxCallback: (value: number) => void


}
export const CounterValues = (props: CounterValueType) => {

    const changeCounterValues = () => {
        props.changeCounterValues()
    }
    const startValueHandler = (value: number) => {
        props.startCallback(value)
    }
    const maxValueHandler = (value: number) => {
        props.maxCallback(value)
    }

    return (
        <div className={s2.box1}>
            <div className={s2.setButton}>
                <UniversalButton name={'set'} disabled={props.error} callback={changeCounterValues}/>
            </div>
            <div className={s2.inputs}>
                <div className={s2.start}><span className={s2.startTitle}>START VALUE: </span><Input callBack={startValueHandler} value={props.startValue}
                                                  error={props.error}
                                                  title={'START-VALUE'}/></div>

                <div className={s2.max}><span className={s2.maxTitle}>MAX VALUE: </span><Input callBack={maxValueHandler} value={props.maxValue} error={props.error}
                                                title={'MAX-VALUE'}/></div>


            </div>
        </div>
    );
};



