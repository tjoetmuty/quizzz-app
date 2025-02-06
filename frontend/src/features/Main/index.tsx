import { FC } from "react";
import { useNavigate } from "react-router-dom";

const MainFeat: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900">
      <div className="my-10 mx-auto h-screen block relative w-1/4">
        <h1 className="text-white font-extrabold text-lg text-center ">Quiz Application</h1>
        <form className="">
          <div className="grid justify-center pt-8 gap-4 ">
          <input type="text" placeholder="username" className="p-2 border-none rounded-md" />
            <button onClick={() => navigate("/quiz")} className="bg-yellow-300 font-medium px-6 py-1 rounded-md text-md">start quiz</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainFeat;
