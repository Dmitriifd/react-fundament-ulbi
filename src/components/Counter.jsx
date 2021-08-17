import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function increment(params) {
        setCount(count + 1)
    }
    function decrement(params) {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className="btn" onClick={increment}>+</button>
            <button className="btn" onClick={decrement}>-</button>
        </div>
    )
}


export default Counter;