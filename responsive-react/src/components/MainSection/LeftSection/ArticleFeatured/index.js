import React from 'react'
import Header from './Header'
import Image from './Image'
import Paragraph from './Paragraph'
import './styles.css'

const ArticleFeatured = () => {
  return (
    <div className='article-featured'>
        <Image/>
        <Header/>
        <Paragraph/>
        <Paragraph />
    </div>
  )
}

export default ArticleFeatured