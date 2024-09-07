import './App.css';
import React, { useState } from 'react';

function App() {
    const [display, setDisplay] = useState('');
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operator, setOperator] = useState(null);
    const [decimalPlaces, setDecimalPlaces] = useState(2);

    const handleNumberClick = (number) => {
        if (operator === null) {
            setFirstNumber(firstNumber + number);
            setDisplay(firstNumber + number);
        } else {
            setSecondNumber(secondNumber + number);
            setDisplay(secondNumber + number);
        }
    };

    const handleOperatorClick = (op) => {
        if (firstNumber !== '') {
            setOperator(op);
            setDisplay(op);
        }
    };

    const handleEqualsClick = () => {
        if (firstNumber !== '' && secondNumber !== '' && operator) {
            let result;
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    return;
            }

            result = result.toFixed(decimalPlaces);
            setDisplay(result);
            setFirstNumber(result.toString());
            setSecondNumber('');
            setOperator(null);
        }
    };

    const handleDecimalClick = () => {
        if (operator === null) {
            if (!firstNumber.includes('.')) {
                setFirstNumber(firstNumber + '.');
                setDisplay(firstNumber + '.');
            }
        } else {
            if (!secondNumber.includes('.')) {
                setSecondNumber(secondNumber + '.');
                setDisplay(secondNumber + '.');
            }
        }
    };

    const handleClearClick = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOperator(null);
        setDisplay('');
    };

    return (
        <div className="App">
            <div className="Calculator">
                <div className="display">
                    {display || "0"}
                </div>
                <div className="buttons">
                    <div className="buttons-numbers">
                        <button type="button" className="btn btn-primary" onClick={() => handleNumberClick('1')}>1</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleNumberClick('2')}>2</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleNumberClick('3')}>3</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleNumberClick('4')}>4</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleNumberClick('5')}>5</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleNumberClick('6')}>6</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleNumberClick('7')}>7</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleNumberClick('8')}>8</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleNumberClick('9')}>9</button>
                        <button type="button" className="btn btn-primary" onClick={() => handleNumberClick('0')}>0</button>
                        <button type="button" className="btn btn-warning" onClick={handleDecimalClick}>.</button>
                    </div>
                    <div className="buttons-operators">
                        <button type="button" className="btn btn-warning" onClick={() => handleOperatorClick('+')}>+</button>
                        <button type="button" className="btn btn-warning" onClick={() => handleOperatorClick('-')}>-</button>
                        <button type="button" className="btn btn-warning" onClick={() => handleOperatorClick('*')}>*</button>
                        <button type="button" className="btn btn-warning" onClick={() => handleOperatorClick('/')}>/</button>
                        <button type="button" className="btn btn-success" onClick={handleEqualsClick}>=</button>
                        <button type="button" className="btn btn-danger" onClick={handleClearClick}>C</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
