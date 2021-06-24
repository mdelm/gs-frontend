import React, { Component } from 'react';
import './Profile.css'
import  userController from '../../project/services/Controllers/userController'
import axios from 'axios'

class Profile extends Component {
constructor(props){
    super(props)
    this.state = {
        user : null
    }
    this.userController = new userController()
}

componentDidMount(){
    this.getOneUser()
}

getOneUser(){
   
    this.userController.getoneUserById(localStorage.getItem('iduser')).then(response=>{
        console.log('response from get one user by id', response);
        this.setState({user : response.data.data})
    })
}

    render() {
        
        return (
            <>
            {
                this.state.user === null 
                ?
                <p>... loading</p>
                : 
                 
              <div>
              <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
              <link rel="stylesheet" href="https://bootswatch.com/4/simplex/bootstrap.min.css" />
              <div className="container">
                  <div className="row">
                  <div className="col-12">
                      <div className="card">
                      <div className="card-body">
                          <div className="card-title mb-4">
                          <div className="d-flex justify-content-start">
                          
                          
                          
                          </div>
                          </div>
                          <div className="row">
                          <div className="col-12">
                              <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                              <li className="nav-item">
                                  <a className="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basicInfo" aria-selected="true">Basic Info</a>
                              </li>
                              </ul>
                              <div className="tab-content ml-1" id="myTabContent">
                              <div className="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                                  <div className="row">
                                  <div className="col-sm-3 col-md-2 col-5">
                                      <label style={{fontWeight: 'bold'}}>Nom</label>
                                  </div>
                                  <div className="col-md-8 col-6">
                                  {this.state.user.nom}
                                  </div>
                                  </div>
                                  <hr />
                                  <div className="row">
                                  <div className="col-sm-3 col-md-2 col-5">
                                      <label style={{fontWeight: 'bold'}}>Prenom</label>
                                  </div>
                                  <div className="col-md-8 col-6">
                                  {this.state.user.prenom}
                                  </div>
                                  </div>
                                  <hr />
                                  <div className="row">
                                  <div className="col-sm-3 col-md-2 col-5">
                                      <label style={{fontWeight: 'bold'}}>Birth Date</label>
                                  </div>
                                  <div className="col-md-8 col-6">
                                  {this.state.user.date_naissance}
                                  </div>
                                  </div>
                  
                              </div>
                              <div className="tab-pane fade" id="connectedServices" role="tabpanel" aria-labelledby="ConnectedServices-tab">
                                  Facebook, Google, Twitter Account that are connected to this account
                              </div>
                              </div>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              </div>

            }
            </>
        );
    }
}

export default Profile;