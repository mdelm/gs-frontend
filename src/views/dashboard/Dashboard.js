import React, { lazy } from 'react'
import {
  CCard,
  CCardBody
} from '@coreui/react'
import img2 from '../../assets/img/img2.jpg'
import DashboardStyle from './DashboardStyle.css';


const Dashboard = () => {
  return (
    <>        
        <div className="body" >     
                <main className="site-wrapper">
                    <div className="pt-table desktop-768">
                        <div className="pt-tablecell page-home relative ">
                        <div className="container">
                                <div className="row">
                                    <div className="col-xs-10 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                        <div className="page-title  home text-center">
                                            <span className="heading-page"> Scolority :<br></br> <br></br><br></br>Menu général
                                            </span>
                                        </div>
                                        <div>
                                        <img src={img2} width="700" height="400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>     
            </div>
        </>
  )
}

export default Dashboard
