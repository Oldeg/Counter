import React from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {CounterValues} from "./Counter/CounterValues";



/*const INITIAL_START_VALUE = 0;
const INITIAL_MAX_VALUE = 5;
const STEP = 1;
export const PARAMETERS_START_VALUE = getLocalStorageValue('START_VALUE', INITIAL_START_VALUE)
export const PARAMETERS_MAX_VALUE = getLocalStorageValue('MAX_VALUE', INITIAL_MAX_VALUE)

function getLocalStorageValue(key: string, initialValue: number) {
    let value = initialValue
    const storageValue = localStorage.getItem(key)
    if (storageValue !== null) {
        value = JSON.parse(storageValue)
    }
    return value
}

function setToLocalStorage(key: string, value: number) {
    const saveToLocalStorage = JSON.stringify(value)
    localStorage.setItem(key, saveToLocalStorage)
}*/

function App() {
    /*const [counter, setCounter] = useState<number>(PARAMETERS_START_VALUE)
    const [startValue, setStartValue] = useState<number>(PARAMETERS_START_VALUE)
    const [maxValue, setMaxValue] = useState<number>(PARAMETERS_MAX_VALUE)*/
    /*const [error, setError] = useState<boolean>(false)
    const [withoutError, setWithoutError] = useState<boolean>(true)
    const increaseDisabled = counter === maxValue
    const resetDisabled = counter <= startValue
    const dispatch = useDispatch()


    const increase = () => {
        setCounter(counter => counter + STEP)
    }
    const resetCounter = () => {
        setCounter(startValue)
    }
    const setValue = () => {
        setToLocalStorage('START_VALUE', startValue)
        setToLocalStorage('MAX_VALUE', maxValue)
        setCounter(startValue)
        setWithoutError(false)

    }
    const startCallback = (value: number) => {
        setStartValue(value)
        setCounter(value)
        setError(value < 0 || value >= maxValue)
        setWithoutError(true)
    }
    const maxCallback = (value: number) => {
        setMaxValue(value)
        setError(value <= startValue)
        setWithoutError(true)

    }*/
    return (
        <div className={'App'}>
            <Counter/>
            <CounterValues/>
        </div>

    )
}

export default App;
