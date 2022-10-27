import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter';


function App() {
    const MAXVALUE = 5;
    const STARTVALUE = 0;
    const STEP = 1;
    const [value, setValue] = useState<number>(STARTVALUE)
    const increase = () => {
        if (value < MAXVALUE && value >=STARTVALUE) {
            setValue(value + STEP)
        }

    }
    const resetCounter = () => {
        setValue(STARTVALUE)
    }
    return (
        <div className={'App'}>
            <Counter
                increase={increase}
                value={value}
                resetCounter={resetCounter}/>
        </div>
    )


}

export default App;
