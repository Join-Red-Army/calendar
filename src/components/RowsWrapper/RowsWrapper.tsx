import React from 'react'
import './RowsWrapper.css'
import Row from '../Row/Row';

const RowsWrapper: React.FC = (props) => {
  return (
    <table className='rowsWrapper'>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </table>
  );
};


export default RowsWrapper;