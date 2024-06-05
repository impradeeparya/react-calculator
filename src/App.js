import logo from './logo.svg';
import './App.css';
import {useReducer, useRef, useState} from "react";

const calculate = (state, action) => {
    console.log(state, action)
    if (action.operation === 'Add') {
        return {input: state.input, result: state.result + state.input}
    } else if (action.operation === 'Subtract') {
        return {input: state.input, result: state.result - state.input}
    } else if (action.operation === 'Divide') {
        return {input: state.input, result: state.result / state.input}
    } else if (action.operation === 'Multiply') {
        return {input: state.input, result: state.result * state.input}
    } else if (action.operation === 'Reset input') {
        return {input: 0, result: state.result}
    } else if (action.operation === 'Reset result') {
        return {input: state.input, result: 0}
    }
}

function App() {

    const initialValues = {result: 0, input: 0}
    const [state, dispatch] = useReducer(calculate, initialValues);

    const userInputRef = useRef(0);
    const resultRef = useRef(0);
    const [result, setResult] = useState(0);

    const add = () => {
        setResult((result) => result + Number(userInputRef.current.value))
    }
    const subtract = () => {
        setResult((result) => result - Number(userInputRef.current.value))
    }
    const multiply = () => {
        setResult((result) => result * Number(userInputRef.current.value))
    }
    const divide = () => {
        if (Number(userInputRef.current.value) !== 0) {
            setResult((result) => result / Number(userInputRef.current.value))
        }
    }
    const resetInput = () => {
        userInputRef.current.value = Number(0);
    }
    const resetResult = () => {
        setResult(0)
    }


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Calculator</h2>
                <p ref={resultRef}>{result}</p>
                <input pattern="[0-9]" type="number"  ref={userInputRef}/>
                <div>
                    <button onClick={add}>Add</button>
                    <button onClick={subtract}>Subtract</button>
                    <button onClick={multiply}>Multiply</button>
                    <button onClick={divide}>Divide</button>
                    <button onClick={resetInput}>Reset input</button>
                    <button onClick={resetResult}>Reset result</button>
                    {/*<button onClick={() => dispatch({operation: 'Add'})}>Add</button>*/}
                    {/*<button onClick={() => dispatch({operation: 'Subtract'})}>Subtract</button>*/}
                    {/*<button onClick={() => dispatch({operation: 'Multiply'})}>Multiply</button>*/}
                    {/*<button onClick={() => dispatch({operation: 'Divide'})}>Divide</button>*/}
                    {/*<button onClick={() => dispatch({operation: 'Reset input'})}>Reset input</button>*/}
                    {/*<button onClick={() => dispatch({operation: 'Reset result'})}>Reset result</button>*/}
                </div>
            </header>
        </div>
    );
}

export default App;
