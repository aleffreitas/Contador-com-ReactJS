import {useState} from 'react';
import './Counter.css';

export function Counter() {

    const [counter, setCounter] = useState(0);

    function Increment(){
        
        setCounter(counter + 1);
    }
    


    return (
        <div className="counter">
            <h2>{counter}</h2>
            <button type="button" onClick={Increment}>Incrementar</button>
        </div>
    );
}