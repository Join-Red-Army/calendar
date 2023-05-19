import React, { useRef, useMemo, useState, useEffect } from 'react'
import ColumnsWrapper from '../ColumnsWrapper';
import RowsWrapper from '../RowsWrapper';
import './Grid.css'


const Grid = () => {
  
  const colsWrapperRef = useRef(null);
  const rowsWrapperRef = useRef(null);


  const [ gridHeigth, setGridHeight ] = useState();
  const [ gridWidth, setGridWidth ] = useState();

  useEffect(
    () => {
      if (!colsWrapperRef.current) return;
      setGridWidth(colsWrapperRef.current.offsetWidth);
    }, [ colsWrapperRef ]
  );

  useEffect(
    () => {
      if (!rowsWrapperRef.current) return;
      setGridHeight(rowsWrapperRef.current.offsetHeight);
    }, [ rowsWrapperRef ]
  );

  const style = useMemo(
    () => ({
      width: gridWidth ?? '',
      height: gridHeigth ?? '', 
    }), [ gridHeigth, gridWidth ]
  );


  return (
    <div className='Grid' style={ style }>
      <ColumnsWrapper ref={ colsWrapperRef } />
      <RowsWrapper ref={ rowsWrapperRef } />
    </div>
  );
};


export default Grid;