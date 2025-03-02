import React, { useState } from 'react'

export default function Lab01() {
  var text = 'default'
    var [name, setName] = useState('')
    function handleChange(e) {
        text = e.target.value;
    }

    function handleClick(e) {
        setName(text);
    }

  return (
    <div>
        <input type="text" name="" onChange={handleChange}/>
        <br />
        <button onClick={handleClick}>Click</button>
        <br/>
        <span>{name}</span>
    </div>
  )
}
