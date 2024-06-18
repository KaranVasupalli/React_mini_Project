import { useState } from 'react'
import './App.css'
import {questions} from './Accordion/Accordion_data'
import MyAccordian from './Accordion/MyAccordian';

function App() {
  const [data, setData] = useState(questions);
    return (
        <>
            <h1 className=' text-center text-4xl'>Accordion</h1>
            <section>
              <div className='flex justify-center items-baseline gap-4'>
                <h1 className=' text-center text-3xl mt-3'>Is multiple open accordion allowed?</h1>
                <input type="checkbox" name="" id="" className=' h-5' />
              </div>
                
            {
                data.map((curElem) => {
                    const {id} = curElem;
                    return <MyAccordian key={id} {...curElem}/>
                })
            }
            </section>
        </>
    );
}

export default App
