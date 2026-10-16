// import React from 'react'
import RightCardsContent from './RightCardsContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-53 rounded-4xl overflow-hidden relative shrink-0'>
        <img className='h-full w-full object-cover' src={props.image} alt="" />
       <RightCardsContent tag={props.tag} id={props.id}/>
    </div>
  )
}

export default RightCard