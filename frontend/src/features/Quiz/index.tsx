import { FC } from "react";
import QuestionFeat from "../Question";

const QuizFeat: FC = () => {
  const onNext = () => {
    console.log("next button");
  };
  const onPrev = () => {
    console.log("prev button");
  };
  return (
    <div className="bg-gray-800">
      <div className="py-10 mx-auto h-screen w-1/4 flex flex-col gap-4 container">
        <h1 className="text-white font-extrabold text-3xl text-center border-4 border-green-300 p-4">
          Quiz Application
        </h1>

        <div>
          <QuestionFeat />
        </div>

        <div className="flex justify-between">
          <button
            className="bg-[#faff5a] px-4 py-1 rounded-md"
            onClick={onPrev}
          >
            Prev
          </button>
          <button
            className="bg-green-600 px-4 py-1 rounded-md"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizFeat;
