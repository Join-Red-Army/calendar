import React from 'react'
import { useAppDispatch } from '../../redux/hooks';
import './ButtonAddColumn.css'


const ButtonAddColumn = () => {
  const dispatch = useAppDispatch();

  return (
    <button 
      className='ButtonAddColumn'
      onClick={() => dispatch({ type: 'columnsWrapper/addColumn' })}
    >add column</button>
  );
};

export default ButtonAddColumn;