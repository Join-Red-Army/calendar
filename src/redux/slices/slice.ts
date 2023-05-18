import { createSlice } from '@reduxjs/toolkit'
import { IEvent } from '../../models/IEvent'


interface IEventsState {
  events: IEvent[]
  isLoading: boolean
}

const initialState: IEventsState = {
  events: [],
  isLoading: false
}

export const eventsSlice = createSlice({
  name: 'eventsSlice',
  initialState,
  reducers: {
    setTime(state, action) {}
  }
});

const { actions, reducer: eventsReducer } = eventsSlice;

export const { setTime } = actions;
export default eventsReducer;