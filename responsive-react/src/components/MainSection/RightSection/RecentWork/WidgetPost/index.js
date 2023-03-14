import React from 'react'
import Header from '../../../LeftSection/ArticleFeatured/Header'
import Image from '../../../LeftSection/ArticleFeatured/Image'
import './styles.css'

const WidgetRecent = () => {
  return (
    <div className='widget-recent-post'>
        <Header className="widget-recent-post-title" />
        <Image className='widget-image'/>
    </div>
  )
}

export default WidgetRecent