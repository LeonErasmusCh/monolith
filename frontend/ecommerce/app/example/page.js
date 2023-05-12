'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setExample, resetExample, addExample, subtractExample } from '../GlobalRedux/Features/example/exampleSlice';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.exampleSlice.value);

  const handleSetValue = (newValue) => {
    dispatch(setExample(newValue));
  };

  const handleAdd = () => {
    dispatch(addExample());
  };

  const handleSubtract = () => {
    dispatch(subtractExample());
  };

  const handleReset = () => {
    dispatch(resetExample());
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => handleSetValue(10)}>Set Value</button>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ExampleComponent
