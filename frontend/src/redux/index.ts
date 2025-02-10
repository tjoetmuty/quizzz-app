import { configureStore } from '@reduxjs/toolkit'
import questionReducer from '../redux/slice/QuestionSlice'
import resultReducer from '../redux/slice/ResultSlice'

export const store = configureStore({
  reducer: {
    question: questionReducer,
    result: resultReducer
  }
})