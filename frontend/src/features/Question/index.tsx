import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FC } from "react";

const QuestionFeat: FC = () => {
  const onSelect = () => {
    console.log("radio button selected");
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h2 className="text-white font-bold text-lg">Sample Question 1</h2>
        <div className="text-white">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="answer 1" id="r1" name="options" onChange={onSelect()}/>
              <Label htmlFor="r1">answer 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="answer 2" id="r2" name="options" onChange={onSelect()}/>
              <Label htmlFor="r2">answer 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="answer 3" id="r3" name="options" onChange={onSelect()}/>
              <Label htmlFor="r3">answer 3</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default QuestionFeat;
