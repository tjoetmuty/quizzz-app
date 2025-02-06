import { Route, Routes } from 'react-router-dom'
import Quiz from './Quiz'
import ResultFeat from './Results'
import MainFeat from './Main'

const RouteFeat = () => {
  return (
    <Routes>
      <Route path="/" element={<MainFeat/>} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<ResultFeat />} />
    </Routes>
  )
}

export default RouteFeat