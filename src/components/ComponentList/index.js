import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../store/reducer/example-reducer';
import BaseModal from './modal';

export default function ComponentList() {
  const [count, setCount] = useState(0);
  const qty = 20
  const [open, setOpen] = useState(false);

  const list = useSelector(
      state => state.exampleReducer.data.slice(0, qty)
    , [qty]);
    const statusOpen = useSelector(
      state => state.exampleReducer.status
    , []);
  const dispatch = useDispatch();

  function add(){
    setCount(count + 1);
    // dispatch({ type: Types.ADD, title: 'GrafQL'})
  }

  const showModal = (status) => {
    console.time()
    setOpen(status)
    // dispatch({ type: Types.SHOW, status})
    console.timeEnd()

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
      <button type="button" onClick={showModal}>showModal</button>
      {/* <BaseModal showModal={showModal} open={statusOpen}/> */}
      <BaseModal showModal={showModal} open={open}/>
    </>
  );
}
// 0.114013671875
// 0.117919921875
// 0.135986328125


// store
// 0.5009765625
// 0.5126953125
// 0.472900390625