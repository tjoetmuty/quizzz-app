import { ResultItems } from "@/constants";
import { FC } from "react";

const ResultFeat: FC = () => {
  return (
    <div className="bg-gray-800">
      <div className="py-10 mx-auto h-screen w-1/4 flex flex-col gap-4 container">
        <h1 className="text-white font-extrabold text-3xl text-center border-4 border-green-300 p-4">
          Quiz Application
        </h1>

        <div>
          <div className="border-4 border-white">
            {ResultItems.map((item) => (
              <div key={item.id} className="flex justify-between text-white my-8 mx-4">
                <p>{item.desc}</p>
                <p>{item.point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultFeat;
