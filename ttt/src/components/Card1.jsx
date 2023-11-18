import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";

function Card(props) {
    
    return (
        <div>
           
                    <div className='border cursor-pointer border-slate-200 p-6'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-bold '>Indian v/s Australia</h2>
                    <AiOutlineLike className='text-white bg-yellow-500 rounded-full h-5 w-5' />
                </div>
                <p className='text-slate-600 my-8'>Think about it - this cricket series was akin to therapy \n Laying our childhood trauma up top , working with it slowly and surely over two months has been very hectic to all the inddian fans. but this time in 2023 we will lift the world cup for sure.</p>

                <div className='flex justify-between'>
                    <div>
                        <span className='text-cyan-300 '>musing </span><p className='inline font-bold text-slate-600'>by anujgosalia</p>
                    </div>
                    <div>
                        <p className='flex-wrap text-gray-300'>August 2 . 2 mins read . 102</p>
                    </div>
                </div>
            </div> 
                )
        </div>
    )
}

export default Card


 