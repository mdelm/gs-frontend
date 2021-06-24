import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader,
} from './index'

import TheHeaderNav from './TheHeaderNav'

const TheLayout = () => {

  return (
    <div className="c-default-layout"> 
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <TheHeaderNav/>
        <div >
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
