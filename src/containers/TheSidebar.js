import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import {nav_admin, nav_etudiant, nav_enseignant} from './_nav'


// sidebar nav config

import TheSidebarStyle from './THeSidebarStyle.css'
const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  const [navigation,setNavigation] =  useState([])

  useEffect(()=> {
    switch (localStorage.getItem('role')) {
      case "admin": setNavigation(nav_admin) ;break;
      case "etuds" : setNavigation(nav_etudiant) ; break;
      case "enseignant" : setNavigation(nav_enseignant) ; break;
      default:
        break;
    }
  },[])
  return (
    
    <CSidebar
      style={{background:"#FFCC00"}}
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
      
    >

      <CSidebarNav>
        <div className="title1">
        <br></br>
        <p>Bienvenue au Systeme Scolaire</p>
        <br></br>
        </div>
        <div className="title2">
        <br></br>
        <h1><center></center></h1>
        <br></br>
        </div>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
            CSidebarBrand,
          }}
        />
      </CSidebarNav>
      
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
