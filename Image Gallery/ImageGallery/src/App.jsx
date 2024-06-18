import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import './App.css';

function App() {
  const [image, setImage] = useState(null);

  const img = (src)=> {
    setImage(src);
  }
  return (
    <>
      <h1 className='text-center text-3xl'>Image Gallery</h1>
      <div className=' flex flex-wrap justify-center'>
        <div className='w-[400px]'>
          <img src={img1} alt="" onClick={ ()=> img(img1)} />
        </div>
        <div className='w-[400px]'>
          <img src={img2} alt="" onClick={()=> img(img2)} />
        </div>
        <div className='w-[400px]'>
          <img src={img3} alt="" onClick={()=> img(img3)} />
        </div>
        <div className='w-[400px]'>
          <img src={img4} alt="" onClick={()=> img(img4)}/>
        </div>
        <div className='w-[400px]'>
          <img src={img5} alt="" onClick={()=> img(img5)}/>
        </div>
        <div className='w-[400px]'>
          <img src={img6} alt="" onClick={()=> img(img6)} />
        </div>
      </div>
      <div className=' flex justify-center  mt-16  '>
          <img src={image}  className="w-[500px] border border-red-500" />
      </div>
      
    </>
  );
}

export default App;
