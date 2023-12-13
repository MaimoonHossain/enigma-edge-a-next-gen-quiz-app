// components/QuestionForm.js
'use client';
import { MinusCircle, PlusCircle } from 'lucide-react';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const QuestionForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [selectedQuestionType, setSelectedQuestionType] =
    useState('multipleChoice');

  const [questions, setQuestions] = useState([
    {
      type: 'multipleChoice',
      question: '',
      options: ['', '', '', ''],
      correctOption: '',
    },
  ]);

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        type: 'multipleChoice',
        question: '',
        options: ['', '', '', ''],
        correctOption: '',
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions.splice(index, 1);
      return newQuestions;
    });
  };

  const renderAdditionalFields = ({ question, index }: any) => {
    switch (selectedQuestionType) {
      case 'multipleChoice':
        const options = ['option1', 'option2', 'option3', 'option4'];

        return (
          <div key={index} className='mb-8'>
            {/* Question text input */}
            <div className='mb-4'>
              <label
                htmlFor={`questions[${index}].question`}
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Question {index + 1}
              </label>
              <input
                type='text'
                id={`questions[${index}].question`}
                {...register(`questions[${index}].question`, {
                  required: 'Question is required',
                })}
                className='border rounded-md py-2 px-3 w-full'
              />
              {errors[`questions[${index}].question`] && (
                <p className='text-red-500 text-sm mt-1'>
                  {String(errors[`questions[${index}].question`]?.message)}
                </p>
              )}
            </div>

            {/* Additional fields for Multiple Choice questions */}
            {options.map((option, optionIndex) => (
              <div key={optionIndex} className='mb-4'>
                <label
                  htmlFor={`questions[${index}].options[${optionIndex}]`}
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  {`Option ${optionIndex + 1}`}
                </label>
                <input
                  type='text'
                  {...register(`questions[${index}].options[${optionIndex}]`)}
                  className='border rounded-md py-2 px-3 w-full'
                />
                <label className='block text-gray-700 text-sm mt-2'>
                  <input
                    type='radio'
                    {...register(`questions[${index}].correctOption`)}
                    value={optionIndex}
                    className='mr-2'
                  />
                  Correct Answer
                </label>
              </div>
            ))}
            <div className='flex mt-4'>
              <button
                type='button'
                onClick={handleAddQuestion}
                className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mr-2'
              >
                <PlusCircle size={20} />
              </button>

              {questions.length > 1 && (
                <button
                  type='button'
                  onClick={() => handleRemoveQuestion(index)}
                  className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600'
                >
                  <MinusCircle size={20} />
                </button>
              )}
            </div>
          </div>
        );
      case 'multipleResponse':
        return (
          <>
            {/* Additional fields for Multiple Response questions */}
            {/* Implement similar to Multiple Choice with checkboxes */}
          </>
        );
      case 'trueFalse':
        return (
          <>
            {/* Additional fields for True or False questions */}
            {/* Implement similar to Multiple Choice with two options (True/False) */}
          </>
        );
      case 'shortAnswer':
        return (
          <>
            {/* Additional fields for Short Answer questions */}
            <div className='mb-4'>
              <label
                htmlFor='maxCharacters'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Maximum Characters
              </label>
              <input
                type='number'
                {...register('maxCharacters')}
                className='border rounded-md py-2 px-3 w-full'
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md'
    >
      <h2 className='text-2xl font-semibold mb-6'>Create a Quiz</h2>

      {/* Type of question select */}
      <div className='mb-4'>
        <label
          htmlFor='questionType'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Type of Question
        </label>
        <Controller
          control={control}
          name='questionType'
          render={({ field }) => (
            <select
              {...field}
              className='border rounded-md py-2 px-3 w-full'
              onChange={(e) => setSelectedQuestionType(e.target.value)}
            >
              <option value='multipleChoice'>Multiple-Choice</option>
              <option value='multipleResponse'>Multiple Response</option>
              <option value='trueFalse'>True or False</option>
              <option value='shortAnswer'>Short Answer</option>
            </select>
          )}
        />
      </div>

      {/* Other form fields based on the question type */}
      {questions.map((question, index) =>
        renderAdditionalFields({ question, index })
      )}

      <button
        type='submit'
        className='bg-blue-500 text-white py-2 px-4 my-2 rounded-md hover:bg-blue-600'
      >
        Submit
      </button>
    </form>
  );
};

export default QuestionForm;
