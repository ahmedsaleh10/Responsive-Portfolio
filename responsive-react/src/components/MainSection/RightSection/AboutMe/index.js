import React from 'react'
import Header from '../../LeftSection/ArticleFeatured/Header'
import Image from '../../LeftSection/ArticleFeatured/Image'
import Paragraph from '../../LeftSection/ArticleFeatured/Paragraph'
import './styles.css'

const AboutMe = () => {
  return (
    <div className='sidebar-widget'>

        <Header className='widget-title'/>
        <Image className='widget-image'/>
        <Paragraph/>

    </div>
  )
}

export default AboutMe