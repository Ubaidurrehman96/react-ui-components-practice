// import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
// console.log(props.users);
  return (
    <div className='pt-5 pb-10 px-15 h-[90vh] flex gap-10 items-center'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1content