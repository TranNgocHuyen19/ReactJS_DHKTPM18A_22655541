import React, { useState } from 'react';

export default function Bai02() {
    const [inputs, setInputs] = useState({
        a: 0, 
        b: 0 
    });
    const [result, setResult] = useState(0);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState, 
            [name]: value 
        }));
    }

    function handleClick() {
        const sum = parseInt(inputs.a) + parseInt(inputs.b);
        setResult(sum);
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
            <button onClick={handleClick}>Click</button>
            <br />
            <span>Result: {result}</span>
        </div>
    );
}
