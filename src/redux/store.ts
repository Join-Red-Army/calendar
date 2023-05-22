import { configureStore } from '@reduxjs/toolkit';
import columnsWrapperReducer from './slices/columnsWrapperSlice';
import rowsWrapperReducer from './slices/rowsWrapperSlice';

export const store = configureStore({
  reducer: {
    rows: rowsWrapperReducer,
    columns: columnsWrapperReducer
   }
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
// export type SelectorType = typeof useSelector;

// export const useAppDispatch = () => useDispatch<DispatchType>();
// export const useAppSelector: <SelectorType> = useSelector;
