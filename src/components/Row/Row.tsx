import React from 'react'
import  './Row.css'

// row__ballast - чтобы для row работал min-height

const Row = () => {
  return (
    <tr className="row">
      <td>
        <div className='row__ballast' />
      </td>
    </tr>
  );
};


export default Row;