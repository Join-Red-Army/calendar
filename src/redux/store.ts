import { configureStore } from '@reduxjs/toolkit';
import columnsWrapperReducer from './slices/columnsWrapperSlice';

export const store = configureStore({
  reducer: { 
    columnsWrapperReducer
   }
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
// export type SelectorType = typeof useSelector;

// export const useAppDispatch = () => useDispatch<DispatchType>();
// export const useAppSelector: <SelectorType> = useSelector;
