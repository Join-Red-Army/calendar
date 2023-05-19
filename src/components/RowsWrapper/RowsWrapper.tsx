import React from 'react'
import './RowsWrapper.css'
import Row from '../Row/Row'

const RowsWrapper: React.FC = (_, ref) => {
  return (
    <table className='rowsWrapper' ref={ ref }>
      <tbody>
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
      </tbody>
    </table>
  );
};


export default React.forwardRef(
  RowsWrapper as React.ForwardRefRenderFunction<unknown, {}>
);