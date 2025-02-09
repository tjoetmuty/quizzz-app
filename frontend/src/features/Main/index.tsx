import { FC } from "react";
import { useNavigate } from "react-router-dom";

const MainFeat: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900">
      <div className="py-10 mx-auto h-screen block relative w-1/4 container">
        <h1 className="text-white font-extrabold text-3xl text-center border-4 border-green-300 p-4">
          Quiz Application
        </h1>
        <div className="flex flex-col justify-center pt-8 gap-4">
          <form className="">
            <input
              type="text"
              placeholder="Username"
              className="p-2 border-none rounded-md w-full"
            />
          </form>
          <button
            onClick={() => navigate("/quiz")}
            className="bg-yellow-300 font-medium px-6 py-1 rounded-md text-md"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainFeat;
