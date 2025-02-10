import { createSlice } from "@reduxjs/toolkit";

export interface ResultState{
  userId: null
  result: []
}

const initialState: ResultState = {
  userId: null,
  result: []
}

export const ResultsSlice  = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload
    }
  }
})

export const {setUserId} = ResultsSlice.actions
export default ResultsSlice.reducer