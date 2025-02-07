import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QuestionsData } from "@/constants";
import { FC, useEffect } from "react";

const QuestionFeat: FC = () => {
  // const [checked, setChecked] = useState(undefined);
  const Question = QuestionsData[0]
  const onSelect = () => {
    console.log("radio button selected");
  };
  useEffect(() => {
    console.log("quests", QuestionsData);
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <h2 className="text-white font-bold text-lg">{Question.question}</h2>
        <div className="text-white">
            <RadioGroup defaultValue="comfortable" >
              <div className="grid gap-4">
                {Question.options?.map((opt, i) => (
                  <div key={i} className="flex gap-4">
                    <RadioGroupItem
                      value="answer 1"
                      id={`q${i}-options`}
                      name="options"
                      onChange={onSelect()}
                    />
                    <Label htmlFor={`q${i}-options`}>{opt}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default QuestionFeat;
