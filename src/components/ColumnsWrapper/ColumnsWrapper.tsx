import React from 'react'
import Column from '../Column'
import './ColumnsWrapper.css'


const ColumnsWrapper = () => {

  return (
    <table className='columnsWrapper'>
      <tr>
        <Column />
        <Column />
        <Column />
        <Column />
      </tr>
    </table>
  );
};


export default ColumnsWrapper;