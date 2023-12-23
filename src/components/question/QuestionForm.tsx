// components/QuestionForm.js
'use client';
import { MinusCircle, PlusCircle } from 'lucide-react';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

const QuestionForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [type, setType] = useState('multipleChoice');

  const [questions, setQuestions] = useState([
    {
      type: 'multipleChoice',
      question: '',
      options: ['', '', '', ''],
      correctOption: '',
    },
  ]);

  const onSubmit = async (data: any) => {
    console.log('initial data', data);
    const { quizTitle, type, questions } = data;

    // Map the type to each question object
    const questionsWithType = questions.map((question: any) => {
      return { ...question, type: type };
    });

    // Create the final data object
    const finalData = {
      quizTitle,
      questions: questionsWithType,
    };

    console.log('submitted data from client, ', finalData);

    try {
      const response = await fetch('/api/submitQuiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Quiz submitted successfully:', responseData.quiz);
        // Handle success, e.g., redirect to a success page
      } else {
        console.error('Error submitting quiz:', response.statusText);
        // Handle error, e.g., display an error message
      }
    } catch (error: any) {
      console.error('Error submitting quiz:', error?.message);
      // Handle error, e.g., display an error message
    }

    // Now you can submit the data to your API or perform other actions
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

  const handleRemoveQuestion = ({ index }: any) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions.splice(index, 1);
      return newQuestions;
    });
  };

  const renderAdditionalFields = ({ question, index }: any) => {
    switch (type) {
      case 'multipleChoice':
        return (
          <MultipleChoiceQuestion
            register={register}
            index={index}
            errors={errors}
            handleAddQuestion={handleAddQuestion}
            handleRemoveQuestion={handleRemoveQuestion}
          />
        );
      case 'multipleResponse':
        return <></>;
      case 'trueFalse':
        return <></>;
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
      <label
        htmlFor='quizTitle'
        className='block text-gray-700 text-sm font-bold mb-2'
      >
        Quiz Title
      </label>
      <input
        type='text'
        {...register('quizTitle', { required: 'Quiz title is required' })}
        className='border rounded-md py-2 px-3 w-full'
      />
      {errors.quizTitle && (
        <p className='text-red-500 text-sm mt-1'>
          {String(errors.quizTitle.message)}
        </p>
      )}

      {/* Type of question select */}
      <div className='mb-4'>
        <label
          htmlFor='questionType'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Type of Question
        </label>
        <select
          {...register('type')}
          value={type}
          onChange={(e) => setType(e.target.value)}
          className='border rounded-md py-2 px-3 w-full'
        >
          <option value='multipleChoice'>Multiple-Choice</option>
          <option value='multipleResponse'>Multiple Response</option>
          <option value='trueFalse'>True or False</option>
          <option value='shortAnswer'>Short Answer</option>
        </select>
      </div>

      {/* Other form fields based on the question type */}
      {questions.map((question, index) => (
        <div key={index}>{renderAdditionalFields({ question, index })}</div>
      ))}

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
