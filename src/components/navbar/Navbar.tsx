// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h3 className='text-white text-xl font-bold'>Enigma Edge</h3>
        </Link>

        <div className='flex items-center space-x-4'>
          <Link href='/'>
            <h3 className='text-white'>Home</h3>
          </Link>
          <Link href='/about'>
            <h3 className='text-white'>About</h3>
          </Link>
          <Link href='/contact'>
            <h3 className='text-white'>Contact</h3>
          </Link>

          {/* Sign In Button */}
          <Link href='/signin'>
            <button className='bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-300'>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
