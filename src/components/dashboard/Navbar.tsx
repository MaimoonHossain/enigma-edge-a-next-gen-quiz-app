'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log('toggleDropdow');
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start rtl:justify-end'>
            <button
              data-drawer-target='logo-sidebar'
              data-drawer-toggle='logo-sidebar'
              aria-controls='logo-sidebar'
              type='button'
              className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            >
              <span className='sr-only'>Open sidebar</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                ></path>
              </svg>
            </button>
            <a href='#' className='flex ms-2 md:me-24'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='h-8 me-3'
                alt='FlowBite Logo'
              />
              <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                Enigma
              </span>
            </a>
          </div>
          <div className='relative'>
            <div className='flex items-center justify-between p-2'>
              <span className='text-xl font-semibold text-white'>
                My Sidebar
              </span>
              <button
                className='text-gray-400 hover:text-white focus:outline-none'
                onClick={toggleDropdown}
              >
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                  alt='user photo'
                />
              </button>
            </div>

            {isDropdownOpen && (
              <div
                className='absolute top-full left-[-10px] z-20 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
                id='dropdown-user'
              >
                <div className='px-4 py-3' role='none'>
                  <p
                    className='text-sm text-gray-900 dark:text-white'
                    role='none'
                  >
                    Neil Sims
                  </p>
                  <p
                    className='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
                    role='none'
                  >
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className='py-1' role='none'>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                      role='menuitem'
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                      role='menuitem'
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                      role='menuitem'
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                      role='menuitem'
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
