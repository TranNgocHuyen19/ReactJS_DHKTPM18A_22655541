import React, { useState } from 'react';

export default function Bai03() {
    const [inputs, setInputs] = useState({
        a: 0,
        b: 0
    });
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState('+')

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleRadioChange(e) {
        setOperation(e.target.value)
    }

    function handleClick() {
        const inputA = parseInt(inputs.a);
        const inputB = parseInt(inputs.b);
        let restul2;
        switch (operation) {
            case '+':
                restul2 = inputA + inputB
                break;
            case '-':
                restul2 = inputA - inputB
                break;
            case '*':
                restul2 = inputA * inputB
                break;
            case '/':
                if(inputB == 0) {
                    alert('B > 0');
                } else {
                restul2 = inputA / inputB
                }
                break;
        }
        setResult(restul2);
    }

    return (
        <div>
            <input
                type="text"
                value={inputs.a}
                placeholder="input a"
                name="a"
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                value={inputs.b}
                placeholder="input b"
                name="b"
                onChange={handleChange}
            />
            <br />
            <button onClick={handleClick}>Calculate</button>
            <br />
            <input type="radio" name="operation" checked={operation === '+'} value="+" onChange={handleRadioChange}/> +
            <input type="radio" name="operation" checked={operation === '-'} value="-" onChange={handleRadioChange}/> -
            <input type="radio" name="operation" checked={operation === '*'} value="*" onChange={handleRadioChange}/> *
            <input type="radio" name="operation" checked={operation === '/'} value="/" onChange={handleRadioChange}/> /
            <br />
            <span>Result: {result}</span>
        </div>
    );
}
