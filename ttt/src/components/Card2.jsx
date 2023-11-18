import { AiOutlineLike } from "react-icons/ai";

function Card() {
    
    return (
        <div>
           
                    <div className='border cursor-pointer border-slate-200 p-6'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-bold '>Write To Build</h2>
                    <AiOutlineLike className='text-white bg-yellow-500 rounded-full h-5 w-5' />
                </div>
                <p className='text-slate-600 my-8'>Writing is the first step to create : \n -stories \n -products \n -companies</p>

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


 