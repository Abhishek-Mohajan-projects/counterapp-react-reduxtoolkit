import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increasedBy5, increment, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="display">
      <h1>Counter App Using React Redux-toolkit</h1>
      <h2>Count : {count}</h2>
      <section>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(increasedBy5(5))}>
          Increased By 5
        </button>
      </section>
    </div>
  );
};

export default CounterView;
