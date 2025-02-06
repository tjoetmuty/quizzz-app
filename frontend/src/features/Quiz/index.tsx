import { FC } from 'react'

const QuizFeat:FC = () => {
  const onNext = () => {
    console.log("next button")
  }
  const onPrev = () => {
    console.log("prev button")
  }
  return (
    <div className='bg-gray-800'>
      <div className="py-10 mx-auto h-screen w-1/4 flex flex-col gap-4">
        <h1 className="text-white font-extrabold text-lg text-center ">Quiz Application</h1>

        <div className='flex justify-between'>
          <button className='bg-[#faff5a] px-4 py-1 rounded-md' onClick={onPrev}>Prev</button>
          <button className='bg-green-600 px-4 py-1 rounded-md' onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default QuizFeat