import React from 'react';

export default function MainContent() {
  return (
    <div className='p-4 sm:ml-64'>
      <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14'>
        <div className='grid grid-cols-3 gap-4 mb-4'>
          <div className='flex col-span-2 items-center justify-evenly h-24 rounded bg-gray-50 dark:bg-gray-800'>
            <div className='grid grid-cols-3 gap-4'>
              {/* Card 1: Total Participants */}
              <div className='flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800'>
                <div className='p-4 border border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
                  <p className='text-lg font-semibold'>Total Participants</p>
                  <p className='text-2xl text-gray-400 dark:text-gray-500'>
                    100
                  </p>
                </div>
              </div>

              {/* Card 2: Total Passed */}
              <div className='flex items-center justify-center h-24 rounded bg-gray-100 dark:bg-gray-800'>
                <div className='p-4 border border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
                  <p className='text-lg font-semibold'>Total Passed</p>
                  <p className='text-2xl text-green-500'>75</p>
                </div>
              </div>

              {/* Card 3: Total Failed */}
              <div className='flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800'>
                <div className='p-4 border border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
                  <p className='text-lg font-semibold'>Total Failed</p>
                  <p className='text-2xl text-red-500'>25</p>
                </div>
              </div>
            </div>
          </div>
          {/* Second column */}
          <div className='rounded bg-gray-100 dark:bg-gray-800'>
            <p className='p-2 text-lg font-semibold text-center'>
              Result Summary
            </p>

            <div className='flex flex-row gap-4 align-center justify-evenly'>
              <div className='p-2 border border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
                <p>Highest</p>
                <p className='text-2xl text-gray-400 dark:text-gray-500'>100</p>
              </div>
              <div className='p-2 border border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
                <p>Average</p>
                <p className='text-2xl text-gray-400 dark:text-gray-500'>100</p>
              </div>
              <div className='p-2 border border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
                <p>Lowest</p>
                <p className='text-2xl text-gray-400 dark:text-gray-500'>100</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <svg
              className='w-3.5 h-3.5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 1v16M1 9h16'
              />
            </svg>
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                className='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
          <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                className='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
          <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                className='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
          <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                className='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
        </div>
        <div className='flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800'>
          <p className='text-2xl text-gray-400 dark:text-gray-500'>
            <svg
              className='w-3.5 h-3.5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 1v16M1 9h16'
              />
            </svg>
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                className='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
          <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                className='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
          <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                className='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
          <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                className='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
