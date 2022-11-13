const STEP = 1;


export type InitialStateType = {
    counter: number
    startValue: number
    maxValue: number
    error: boolean
    withoutError: boolean
    setStartValue: number
    setMaxValue: number
}
const initialState: InitialStateType = {
    counter: 0,
    startValue: 0,
    maxValue: 5,
    setStartValue: 0,
    setMaxValue:5,
    error: false,
    withoutError: true
}
export const commonReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INCREASE': {
            return {...state, counter: state.counter + STEP}
        }
        case 'RESET': {
            return {...state, counter: state.startValue}
        }
        case 'START_VALUE': {
            return {
                ...state, setStartValue: action.payload.value, error: action.payload.value < 0 ||
                    action.payload.value >= state.setMaxValue, withoutError:true
            }
        }
        case 'MAX_VALUE': {
            return {...state, setMaxValue: action.payload.value, error: action.payload.value <= state.setStartValue, withoutError:true}
        }
        case 'SET': {
            return {...state, counter: state.setStartValue, startValue: state.setStartValue,maxValue: state.setMaxValue,  withoutError: false}
        }
        default:
            return state
    }
}
type ActionsType = increaseACType | resetCounterACType | setValueACType | startValueACType | maxValueACType
type increaseACType = ReturnType<typeof increaseAC>
type resetCounterACType = ReturnType<typeof resetCounterAC>
type setValueACType = ReturnType<typeof setValueAC>
type startValueACType = ReturnType<typeof startValueAC>
type maxValueACType = ReturnType<typeof maxValueAC>
export const increaseAC = () => {
    return {
        type: 'INCREASE'
    } as const
}
export const resetCounterAC = () => {
    return {
        type: 'RESET'
    } as const
}
export const setValueAC = () => {
    return {
        type: 'SET'
    } as const
}
export const startValueAC = (value: number) => {
    return {
        type: 'START_VALUE',
        payload: {
            value
        }
    } as const
}
export const maxValueAC = (value: number) => {
    return {
        type: 'MAX_VALUE',
        payload: {
            value
        }

    } as const
}