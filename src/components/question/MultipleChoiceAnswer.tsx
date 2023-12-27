// components/QuizForm.js
'use client';
import React, { useState } from 'react';

const MultipleChoiceAnswer = (quiz: any) => {
  const questions = quiz.quiz.questions;
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

  const handleSubmit = () => {
    setShowResult(true);
  };

  const result = calculateResult();

  return (
    <div className='max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-md'>
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
                <input
                  type='radio'
                  name={`questions[${index}].selectedOption`}
                  value={optionIndex}
                  checked={selectedOptions[index] === optionIndex}
                  onChange={() => handleOptionChange(index, optionIndex)}
                  className='mr-2 focus:ring-blue-500 focus:border-blue-500'
                />
                {option}
              </div>
            ))}
          </div>

          {/* Display correctness feedback */}
          {/* {showResult && (
            <p
              className={`text-lg font-bold ${
                checkAnswer(index) ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {checkAnswer(index) ? 'Correct' : 'Incorrect'}
            </p>
          )} */}
        </div>
      ))}

      {showResult && (
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
      )}

      <div className='mt-4'>
        <button
          type='button'
          onClick={handleSubmit}
          className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
};

export default MultipleChoiceAnswer;
