// components/QuizForm.js
'use client';
import React from 'react';

const MultipleChoiceAnswer = (quiz: any) => {
  console.log(quiz);
  const { questions } = quiz;
  // const handleOptionChange = (questionIndex, optionIndex) => {
  //   // Implement logic to handle option changes
  //   console.log(`Selected option ${optionIndex} for question ${questionIndex}`);
  // };

  // const handleSubmit = () => {
  //   // Implement logic to handle form submission
  //   console.log('Form submitted');
  //   // onSubmit(); // Call the onSubmit callback (you can replace it with actual submission logic)
  // };

  return (
    <div>
      {questions.map((question: any, index: any) => (
        <div key={index} className='mb-8'>
          <div className='mb-4'>
            <label
              htmlFor={`questions[${index}].question`}
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Question {index + 1}
            </label>
            <p>{question.text}</p>
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
                  // onChange={() => handleOptionChange(index, optionIndex)}
                  className='mr-2'
                />
                {option}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className='mt-4'>
        <button
          type='button'
          // onClick={handleSubmit}
          className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
};

export default MultipleChoiceAnswer;
