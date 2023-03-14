import React from 'react'
import Header from '../../LeftSection/ArticleFeatured/Header'
import WidgetPost from './WidgetPost'
import './styles.css'

const RecentWork = () => {
  return (
    <div className='sidebar-widget'>
      <Header/>
      <WidgetPost/>
      <WidgetPost/>
      <WidgetPost/>
    </div>
  )
}

export default RecentWork