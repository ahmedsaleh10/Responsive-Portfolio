import React from 'react'
import ArticleRecent from './ArticleRecent'
import ArticleFeatured from './ArticleFeatured'

const LeftSection = () => {
  return (
    <div>
        <ArticleFeatured/>
        <div>
          <ArticleRecent/>
          <ArticleRecent/>
          <ArticleRecent/>
        </div>
        
    </div>
  )
}

export default LeftSection