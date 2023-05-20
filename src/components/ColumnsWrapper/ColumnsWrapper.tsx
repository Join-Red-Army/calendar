import React from 'react'
import Column from '../Column'
import './ColumnsWrapper.css'


const ColumnsWrapper: React.FC = (_, ref) => {

  return (
    <table className='columnsWrapper' ref={ref}>
      <tbody>
        <tr>
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />

          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </tr>
      </tbody>
    </table>
  );
};


export default React.forwardRef(
  ColumnsWrapper as React.ForwardRefRenderFunction<unknown, {}>
);