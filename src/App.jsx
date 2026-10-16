// import React from 'react'
import Section1 from './components/Section-1/Section1'
import Section2 from './components/Section-2/Section2'

const App = () => {
  const users = [
    {
    image: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Satisfied'
    },
    {
    image:'https://images.unsplash.com/photo-1718279602011-61e0f5a7bd81?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Fulfilled',
    },
        {
    image:'https://images.unsplash.com/photo-1615561177861-76ac4aeeed8e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Confident',
    },
            {
    image:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Thriving',
    },
            {
    image:'https://plus.unsplash.com/premium_photo-1673289670385-362cce1ac848?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Optimized',
    },
    {
    image:'https://plus.unsplash.com/premium_photo-1661495483342-4b40cadb545e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Delighted',
    },
        {
    image:'https://plus.unsplash.com/premium_photo-1661753625372-230367be2c7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Dedicated',
    },
        {
    image:'https://images.unsplash.com/photo-1628017997653-a31314c14cd5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Financial',
    },
        {
    image:'https://images.unsplash.com/photo-1585399058165-efca8b082251?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Essential',
    },
        {
    image:'https://images.unsplash.com/photo-1713526708767-ae5b1889772b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Authentic',
    },
        {
    image:'https://images.unsplash.com/photo-1580894745015-755d26d02f26?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Connected',
    },
        {
    image:'https://images.unsplash.com/photo-1655216068156-ebc1ebd7f154?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Empowered',
    },
        {
    image:'https://images.unsplash.com/photo-1663524789625-b8d2ed6cac2b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Anchored',
    },
        {
    image:'https://images.unsplash.com/photo-1580675788857-2f6454ee2b4f?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Sustained',
    },
        {
    image:'https://images.unsplash.com/photo-1629184510982-cf91280c1d53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Unmatched',
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App