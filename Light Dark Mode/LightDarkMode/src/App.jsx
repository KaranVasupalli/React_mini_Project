import { useState } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className='text-center text-5xl'>Light Dark Mode</h1>
      <div className='ml-12 mt-12 flex flex-col gap-6'>
        <h2 className='text-3xl'>
          Try to toggle the theme and see the change !!!
        </h2>
        <button onClick={toggleTheme} className='px-4 py-2 bg-red-400 w-[600px]'>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
