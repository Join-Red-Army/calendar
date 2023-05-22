import { useAppDispatch } from '../../redux/hooks'
import Button from '../Button/Button';
import { addRow, removeRow } from '../../redux/slices/rowsWrapperSlice';
import { addColumn, removeColumn } from '../../redux/slices/columnsWrapperSlice';
import './ButtonsSection.css'

const ButtonsSection = () => {
  const dispatch = useAppDispatch();
  
  return (
    <div className='ButtonsSection'>
      
      <div className='ButtonsSection__block'>
        <Button text='Добавить ряд' onClickFoo={ () => dispatch(addRow()) } />
        <Button text='Удалить ряд' onClickFoo={ () => dispatch(removeRow()) } />
      </div>

      <div className='ButtonsSection__block'>
        <Button text='Добавить колонку' onClickFoo={ () => dispatch(addColumn()) } />
        <Button text='Удалить колонку' onClickFoo={ () => dispatch(removeColumn()) } />
      </div>

    </div>
  );
};


export default ButtonsSection;