import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const MainSection = () => {
  return (
    <div className='container container-flex'>
       <main role='main'>
        <LeftSection />
        </main> 

        <aside className='sidebar'>
         <RightSection /> 
        </aside>
        

    </div>
  )
}

export default MainSection