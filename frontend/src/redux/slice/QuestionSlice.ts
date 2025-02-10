import { createSlice } from "@reduxjs/toolkit";

export interface QuestionState{
  queue: [],
  answers: [],
  trace: number
}

const initialState: QuestionState = {
  queue: [],
  answers: [],
  trace: 0
}

export const QuestionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    startExamAction : (state, action) => {
      state.queue = action.payload
    }
  }
})

export const {startExamAction} = QuestionSlice.actions
export default QuestionSlice.reducer