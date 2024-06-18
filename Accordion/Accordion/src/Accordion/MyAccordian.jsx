import React, { useState } from 'react';


const MyAccordian = ({question,answer}) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className=' flex flex-col items-center justify-center mt-6 w-full'>
                <div className=' flex flex-col justify-center w-[600px] text-2xl gap-4'>
                    <div className='flex gap-3 cursor-pointer'>
                    <p onClick={()=> setShow(!show)}>{show? "➖" :"➕"}</p>
                    <h1>{question}</h1>
                    </div>
                    {
                        show && <p className=' px-4'>{answer}</p>
                    }
                </div>
            </div>
        </>
    );
}

export default MyAccordian;