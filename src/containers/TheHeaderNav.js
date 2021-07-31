import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
} from '@coreui/react'
import userController from '../project/services/Controllers/userController';
import TheHeaderNavStyle from "./TheHeaderNavStyle.css"


const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const [ user, setUser ] = useState(null);

  useEffect(() => {
    getOneUser();
  }, []);

  const getOneUser = () => {
    const userCtrl = new userController();
    userCtrl.getoneUserById(localStorage.getItem('iduser'))
      .then(response => {
        console.log('response from get one user by id', response);
        setUser(response.data.data);
      });
  };

 /* const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }*/

  return (
    
    <CHeader withSubheader 
    style={{background:"#FFCC00"}}>
        <div className="NavTitle">
            <div><p>
            { 
              user 
              ?
              <><i className="fa fa-user ml-2"/> {`${user.nom} ${user.prenom}`}</>
              :
              `Systeme Scolaire`
            }
            </p></div>
        </div>
    
    </CHeader>
  )
}

export default TheHeader
