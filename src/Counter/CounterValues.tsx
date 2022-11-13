import React from 'react'
import s2 from './CounterValues.module.css'
import Input from "./Input";
import {UniversalButton} from "./UniversalButton";
import {useDispatch, useSelector} from "react-redux";
import {CounterRootStateType} from "../Redux/store";
import {InitialStateType, maxValueAC, setValueAC, startValueAC} from "../Redux/Reducers/commonReducer";


export const CounterValues = () => {
    const dispatch = useDispatch()
    const state = useSelector<CounterRootStateType, InitialStateType>(state => state.commonReducer)


    return (
        <div className={s2.box1}>
            <div className={s2.setButton}>
                <UniversalButton name={'set'} disabled={state.error} callback={() => dispatch(setValueAC())}/>
            </div>
            <div className={s2.inputs}>
                <div className={s2.start}><span className={s2.startTitle}>START VALUE: </span><Input
                    callBack={(value) => dispatch(startValueAC(value))} value={state.setStartValue}
                    error={state.error}
                    title={'START-VALUE'}/></div>

                <div className={s2.max}><span className={s2.maxTitle}>MAX VALUE: </span><Input
                    callBack={(value) => dispatch(maxValueAC(value))} value={state.setMaxValue} error={state.error}
                    title={'MAX-VALUE'}/></div>


            </div>
        </div>
    );
};



