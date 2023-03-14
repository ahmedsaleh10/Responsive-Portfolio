import React from 'react'
import Paragraph from '../ArticleFeatured/Paragraph'
import Header from '../ArticleFeatured/Header'
import './styles.css'

const ArticleRecent = () => {
  return (

    <div className='article-recent'>
        <div className='article-recent-main'>
            <Header/>
            <Paragraph/>
        </div>

        <div className='article-recent-secondary'>
            <img
                src="images/Black Jack Game.png"
                alt="Black Jack Game Using HTML5, CSS3 and JS"
                className="article-image"
            />
            <p className="article-info">Jan 19, 2023 | 3 comments</p>
        </div>
    </div>
  )
}

export default ArticleRecent