import React, { useState, useEffect } from 'react';
import "./App.css"

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component unmounted');
        };
    }, []);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className='App'>
            <h1>{count}</h1>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default Counter;
