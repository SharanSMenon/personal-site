import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className='bg-blue-50'>
        <Seo />
        <Navigation />
        <main className='bg-blue-50'>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Template
