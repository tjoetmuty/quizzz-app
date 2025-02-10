import { configureStore } from '@reduxjs/toolkit'
import questionReducer from '../redux/slice/QuestionSlice'

export const store = configureStore({
  reducer: {
    question: questionReducer
  }
})