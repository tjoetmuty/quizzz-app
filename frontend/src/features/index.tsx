import { Route, Routes } from 'react-router-dom'
import ResultFeat from './Results'
import MainFeat from './Main'
import QuizFeat from './Quiz'

const RouteFeat = () => {
  return (
    <Routes>
      <Route path="/" element={<MainFeat/>} />
      <Route path="/quiz" element={<QuizFeat />} />
      <Route path="/result" element={<ResultFeat />} />
    </Routes>
  )
}

export default RouteFeat