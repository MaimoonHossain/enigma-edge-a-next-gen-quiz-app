import Navbar from '../components/navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold'>Welcome to Enigma Edge</h1>
      </div>
    </div>
  );
}
