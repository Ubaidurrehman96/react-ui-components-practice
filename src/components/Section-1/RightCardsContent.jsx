import React from 'react'

const RightCardsContent = (props) => {
  return (
        <div className=' h-full w-full left-0 absolute top-0 p-5 flex flex-col justify-between'>
            <h3 className='bg-white rounded-full h-9 w-9 flex justify-center items-center text-xl font-semibold'>{props.id+1}</h3>
            <div className='pt-20'>
                <p className=' text-white leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam veniam fuga adipisicing elit. Earum quibusdam veniam fuga!!</p>
            </div>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-5 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-semibold px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
  )
}

export default RightCardsContent