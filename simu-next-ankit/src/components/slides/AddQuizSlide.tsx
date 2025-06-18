'use client'
import {useState} from "react"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { QuizData } from '@/lib/features/modules/moduleSlice';


interface AddQuizSlideProps {
  initialData: QuizData;
  onChange: (data: QuizData) => void;
  onRemove: () => void;
  index: number;
}

const AddQuizSlide = ({ initialData, onChange, onRemove, index }: AddQuizSlideProps) => {
  const [data, setData] = useState<QuizData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let updatedData = { ...data };

    if (name.startsWith('option')) {
      const optionIndex = parseInt(name.replace('option', ''), 10) - 1;
      updatedData.options[optionIndex] = value;
    } else {
      updatedData = { ...updatedData, [name]: value };
    }

    setData(updatedData);
    onChange(updatedData);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">
          Slide {index} - Quiz
        </CardTitle>
        <Button
          onClick={onRemove}
          variant="destructive"
          size="sm"
        >
          Remove
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="question">Question</Label>
          <Input
            id="question"
            name="question"
            value={data.question}
            onChange={handleChange}
            placeholder="Enter question"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.options.map((option, i) => (
            <div key={i} className="space-y-2">
              <Label htmlFor={`option${i + 1}`}>Option {i + 1}</Label>
              <Input
                id={`option${i + 1}`}
                name={`option${i + 1}`}
                value={option}
                onChange={handleChange}
                placeholder={`Enter option ${i + 1}`}
                required
              />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Label htmlFor="correctAnswer">Correct Answer (Option Number 1-4)</Label>
          <Input
            id="correctAnswer"
            type="number"
            name="correctAnswer"
            value={data.correctAnswer}
            onChange={handleChange}
            placeholder="Enter correct answer (1-4)"
            min={1}
            max={4}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="answerDescription">Answer Description</Label>
          <Input
            id="answerDescription"
            name="answerDescription"
            value={data.answerDescription}
            onChange={handleChange}
            placeholder="Enter answer description"
            required
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AddQuizSlide;