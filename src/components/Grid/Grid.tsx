import React, { useRef, useMemo, useState, useEffect, useLayoutEffect } from 'react'
import ColumnsWrapper from '../ColumnsWrapper';
import RowsWrapper from '../RowsWrapper';
import './Grid.css'
import { useAppSelector } from '../../redux/hooks';


const Grid = () => {
  const { columnCount } = useAppSelector(state => state.columns);
  const { rowCount } = useAppSelector(state => state.rows);

  const colsWrapperRef = useRef<HTMLInputElement>(null);
  const rowsWrapperRef = useRef<HTMLInputElement>(null);

  const [ gridHeigth, setGridHeight ] = useState<number>(0);
  const [ gridWidth, setGridWidth ] = useState<number>(0);

  useLayoutEffect(
    () => {
      if (!colsWrapperRef.current) return;
      setGridWidth(columnCount * 50);
    }, [ colsWrapperRef, columnCount ]
  );

  useEffect(
    () => {
      if (!rowsWrapperRef.current) return;
      setGridHeight(rowCount * 50);
    }, [ rowsWrapperRef, rowCount ]
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