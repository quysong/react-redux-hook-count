import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../store/reducer/example-reducer';

export default function ComponentList() {
  const [count, setCount] = useState(0);
  const qty = 20

  const list = useSelector(
      state => state.exampleReducer.data.slice(0, qty)
    , [qty]);
  const dispatch = useDispatch();

  function add(){
    setCount(count + 1);
    dispatch({ type: Types.ADD, title: 'GrafQL'})
  }
  useEffect(() => {
    console.log('list', list)
  }, [list])
  
  useEffect(() => {
    console.log('count', count)
  }, [count])
  
  

  return (
    <>
      <ul>
        {list.map( item => <li key={item}>{item}</li>)}
      </ul>
      <button type="button" onClick={add}>ADD</button>
    </>
  );
}
