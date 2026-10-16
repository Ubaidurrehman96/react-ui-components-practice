// import React from 'react'

import RightCard from "./RightCard"

const RightContent = (props) => {
  // console.log(props.users);
  return (
   
  <div id="right-box" className=' h-full w-2/3 p-3 flex flex-nowrap gap-5 overflow-x-auto pl-12'>
      {props.users.map(function(elem, idx){

        return <RightCard key={idx} id={idx} image={elem.image} tag={elem.tag}/>
      })}

  </div>
  )
}

export default RightContent