import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import logout from '../views/pages/logout/logout'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }
const logout =()=>{

  window.location.href='/#/index' 
}
  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }
  
const useStyles = makeStyles(theme => ({
  root: {
      backgroundColor: '#042e60',
      marginLeft:'672px',
  },
  searchInput: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: '0.8rem',
    '&:hover': {
        backgroundColor: '#f2f2f2',
        color:'black'
    },
    '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(1)
    }
}
}))
  const classes = useStyles();
  return (
    
    <CHeader withSubheader 
    style={{background:"#042e60"}}>

      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
        style={{background:"#042e60"}}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <div className="upper-menu" style={{backgroundColor: "#042e60 "}}>
            <Toolbar position="static" className={classes.root}>
                <Grid container
                    alignItems="center">
                    
                    
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small"  />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small"  onClick={()=>logout()}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
      </div>
    </CHeader>
  )
}

export default TheHeader
