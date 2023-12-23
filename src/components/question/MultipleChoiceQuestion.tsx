// components/MultipleChoiceQuestion.js
import React from 'react';

const MultipleChoiceQuestion = ({
  register,
  index,
  errors,
  handleAddQuestion,
  handleRemoveQuestion,
}: any) => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

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
            {option}
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
          Add Question
        </button>

        <button
          type='button'
          onClick={() => handleRemoveQuestion(index)}
          className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600'
        >
          Remove Question
        </button>
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
