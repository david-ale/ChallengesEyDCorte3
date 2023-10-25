import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../Store/counterSlice";
export const App = () => {
  const {counter} = useSelector ((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
        <h1>App</h1>
        <hr/>
        <p> Counter is: {counter} </p> 
        <button onClick={()=> dispatch(increment())}
        > +1 </button>
        <button onClick={() => dispatch(decrement())}
        > -1 </button>
    </>
  )
}