// components/QuizForm.js
'use client';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from '../ui/use-toast';

const MultipleChoiceAnswer = ({ quiz, username, userId }: any) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  console.log('quiz', quiz);
  const questions = quiz.questions;
  const quizId = quiz.id;
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number;
  }>({});
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (questionIndex: any, optionIndex: any) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionIndex]: optionIndex,
    }));
  };

  const checkAnswer = (questionIndex: any) => {
    const selectedOption = selectedOptions[questionIndex];
    const correctOption = questions[questionIndex].correctOption;
    return selectedOption === correctOption;
  };

  const calculateResult = () => {
    const correctCount = questions.reduce(
      (count: any, _: any, index: any) =>
        checkAnswer(index) ? count + 1 : count,
      0
    );
    const percentage = (correctCount / questions.length) * 100;
    return { correctCount, percentage };
  };

  const onSubmit = async () => {
    const { percentage } = calculateResult();
    const status = percentage >= 50 ? 'Passed' : 'Failed';
    console.log('result status', percentage, status);
    setShowResult(true);
    // const { quizTitle, type, questions } = data;

    // // Map the type to each question object
    // const questionsWithType = questions.map((question: any) => {
    //   return { ...question, type: type };
    // });

    // Create the final data object
    const finalData = {
      quizId,
      status,
      percentage,
      username,
      userId,
    };

    console.log('submitted data from client, ', finalData);

    try {
      const response = await fetch('/api/submitResult', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Quiz submitted successfully',
          style: { background: 'green', color: 'white' },
        });
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong',
          variant: 'destructive',
          style: { background: 'red', color: 'white' },
        });
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Error submitting quiz',
        variant: 'destructive',
        style: { background: 'red', color: 'white' },
      });
      // Handle error, e.g., display an error message
    }
  };

  return (
    <div className='max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-md'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {questions.map((question: any, index: any) => (
          <div key={index} className='mb-8'>
            <div className='mb-4'>
              <label
                htmlFor={`questions[${index}].question`}
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Question {index + 1}
              </label>
              <p>{question.questionText}</p>
            </div>

            <div>
              {question.options.map((option: any, optionIndex: any) => (
                <div key={optionIndex} className='mb-4'>
                  <label
                    htmlFor={`questions[${index}].options[${optionIndex}]`}
                    className='block text-gray-700 text-sm font-bold mb-2'
                  >
                    {option}
                  </label>
                  <Controller
                    control={control}
                    name={`questions[${index}].selectedOption`}
                    render={({ field }) => (
                      <input
                        type='radio'
                        {...field}
                        value={optionIndex}
                        checked={selectedOptions[index] === optionIndex}
                        onChange={() => handleOptionChange(index, optionIndex)}
                        className='mr-2 focus:ring-blue-500 focus:border-blue-500'
                      />
                    )}
                  />
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* {showResult && (
          <div className='mt-4'>
            <p className='text-lg font-bold'>
              Result: {result.correctCount}/{questions.length} (
              {result.percentage.toFixed(2)}%)
            </p>
            <p
              className={`text-xl font-bold ${
                result.percentage >= 50 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {result.percentage >= 50 ? 'Passed' : 'Failed'}
            </p>
          </div>
        )} */}

        <div className='mt-4'>
          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
          >
            Submit Exam
          </button>
        </div>
      </form>
    </div>
  );
};
export default MultipleChoiceAnswer;
