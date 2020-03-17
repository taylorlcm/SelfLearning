import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementFive} from './action';


function App() {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementFive(2))}>+ Some Number</button>
    </div>
  );
}

export default App;
