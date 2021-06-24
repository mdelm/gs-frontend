import React, { Component } from 'react';
import userController from '../../../project/services/Controllers/userController'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import CIcon from '@coreui/icons-react'
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matricule: '',
      password: '',
      error: '',
    };
    this.userController = new userController()
  }

  handleClick(evt) {
    evt.preventDefault()
    const data ={
      matricule:this.state.matricule,
      password:this.state.password
    }
    // data["matricule"]=this.state.matricule
    // data["password"]=this.state.password
    
    console.log('dataLogin',data);
    this.userController.authenticate(data).then((res) => {
        console.log(res.data);
        localStorage.setItem('role',res.data.data.user.__t) //__t : c'est le role de chaque user 
        if (res.data.status === 401) {
          
        } else {
          localStorage.setItem('refreshToken', res.data.data.refreshToken)
          localStorage.setItem('accessToken', res.data.data.accesstoken)
          localStorage.setItem('auth_uid', res.data.data.userInfo)
          localStorage.setItem('role',res.data.data.user.__t)
          localStorage.setItem('iduser',res.data.data.user._id)
          this.props.history.push('/#/dashboard')
        } 
    }).catch(err => {
  })
  };
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your matricule"
                      onChange={event=>this.setState({matricule:event.target.value})}
                      icon="envelope"
                      group
                      type="Text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Type your password"
                      onChange={event=>this.setState({password:event.target.value})}   
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
  
                <div className="text-center mt-4">
                  <MDBBtn
                    color="light-blue"
                    className="mb-3"
                    type="submit"
                    onClick={(evt) => this.handleClick(evt)}
                  >
                    Login
                  </MDBBtn>
                </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>Forgot Password?</p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
}

export default Login;