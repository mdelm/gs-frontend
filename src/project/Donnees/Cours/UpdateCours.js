import React, { Component } from 'react';
import "./UpdateCoursStyle.css"
import { Button, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Modal from 'react-bootstrap/Modal'
import './UpdateCoursStyle.css'

import axios from 'axios';
import coursController from '../../services/Controllers/coursController'
class UpdateCours extends Component {
    constructor(){
        super()
        this.state={
            nom:'',
           
        }
        this.coursController = new coursController()
        this.getOneCours()
    }

    getOneCours(){
        console.log('iddddddddd',localStorage.getItem('idCours'));
        this.coursController.getoneCoursById(localStorage.getItem('idCours')).then(res=>{
          console.log('response from get OneCours',res.data.data);
         
        })
    }

    handleClick = event => {
        event.preventDefault();
        let data={
            nom:this.state.nom
           

        }
    
     
   
    
        console.log('errr');
        console.log('data',this.state);
        this.coursController.update(localStorage.getItem('idCours'),data).then(response=>{
            console.log('response',response.data);
            window.location.reload()
        }) 
    };

    renderButtonText() {
        const { buttonText } = this.props;
        if (!buttonText) {
          return 'update';
        }
        return buttonText;
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton style={{backgroundColor:"#FFCC00"}}>
                <Modal.Title id="contained-modal-title-vcenter"> 
                <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>modifier Cours</h1>          </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form>
                    <div class="group">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Nom" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({nom:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                       
       
                      
                    <button type="button" class="button buttonBlue" style={{color:"black"}}
                    onClick={(event)=>this.handleClick(event)}>modifier
                        <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
                    </button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            
            );
        }
    
      }
export default UpdateCours;