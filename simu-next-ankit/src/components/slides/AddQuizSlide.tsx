'use client';

import { useState, useEffect } from "react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { QuizData } from '@/lib/features/modules/moduleSlice';

interface AddQuizSlideProps {
  initialData: QuizData;
  onChange: (data: QuizData) => void;
  onRemove: () => void;
  index: number;
}

const AddQuizSlide = ({ initialData, onChange, onRemove, index }: AddQuizSlideProps) => {
  const [data, setData] = useState<QuizData>(initialData);

  // Sync with parent when initialData changes
  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let updatedData = { ...data };

    if (name.startsWith('option')) {
      const optionIndex = parseInt(name.replace('option', ''), 10) - 1;
      const updatedOptions = [...data.options];
      updatedOptions[optionIndex] = value;
      updatedData = { ...data, options: updatedOptions };
    } else if (name === 'correctAnswer') {
      const answerValue = parseInt(value, 10);
      // Validate the correct answer is between 1-4
      if (answerValue >= 1 && answerValue <= 4) {
        updatedData = { ...data, correctAnswer: answerValue - 1 }; // Convert to 0-based index
      } else if (value === '') {
        updatedData = { ...data, correctAnswer: 0 }; // Default to first option
      } else {
        return; // Don't update if invalid
      }
    } else {
      updatedData = { ...data, [name]: value };
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
          type="button"
        >
          Remove
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
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

        <div className="space-y-4">
          <Label className="text-base font-medium">Answer Options *</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.options.map((option, i) => (
              <div key={i} className="space-y-2">
                <Label htmlFor={`option${i + 1}-${index}`} className="text-sm">
                  Option {i + 1}
                  {data.correctAnswer === i && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Correct
                    </span>
                  )}
                </Label>
                <Input
                  id={`option${i + 1}-${index}`}
                  name={`option${i + 1}`}
                  value={option}
                  onChange={handleChange}
                  placeholder={`Enter option ${i + 1}`}
                  className={data.correctAnswer === i ? 'border-green-300 bg-green-50' : ''}
                  required
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`correctAnswer-${index}`}>Correct Answer *</Label>
          <select
            id={`correctAnswer-${index}`}
            name="correctAnswer"
            value={data.correctAnswer + 1} // Convert back to 1-based for display
            onChange={(e) => handleChange(e as any)}
            className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select correct answer</option>
            {data.options.map((option, i) => (
              <option key={i} value={i + 1}>
                Option {i + 1}: {option.substring(0, 30)}{option.length > 30 ? '...' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`answerDescription-${index}`}>Answer Explanation *</Label>
          <Textarea
            id={`answerDescription-${index}`}
            name="answerDescription"
            value={data.answerDescription}
            onChange={handleChange}
            placeholder="Explain why this is the correct answer..."
            className="min-h-[60px]"
            required
          />
        </div>

        
      </CardContent>
    </Card>
  );
};

export default AddQuizSlide;