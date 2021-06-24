import React, { Component } from 'react';

import "./UpdateModuleStyle.css"
import { Button, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import moduleController from '../../services/Controllers/moduleController'
import Modal from 'react-bootstrap/Modal'

class UpdateSalle extends Component {
    
    constructor(){
        super()
        this.state={
            nom:'',
           libelle:'',
        }
        this.moduleController = new moduleController()
        this.getOneModule()
    }

    getOneModule(){
        console.log('iddddddddd',localStorage.getItem('idModule'));
        this.moduleController.getoneModuleById(localStorage.getItem('idModule')).then(res=>{
          console.log('response from get One Module',res.data);
         
        })
    }

    handleClick = event => {
        event.preventDefault();
        let data={
            nom:this.state.nom,
            libelle:this.state.libelle,
        }
    
        console.log('errr');
        console.log('data',this.state);
        this.moduleController.updateModule(localStorage.getItem('idModule'),data).then(response=>{
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
    render(){
        return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton style={{backgroundColor:"#FFCC00"}}>
            <Modal.Title id="contained-modal-title-vcenter"> 
            <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>modifier Module</h1>          </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <form>
                    <div class="group">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Nom " style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({nom:event.target.value})} value={this.state.nom}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>

                    <div class="group">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="libelle" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({libelle:event.target.value})} value={this.state.libelle}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
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

export default UpdateSalle;