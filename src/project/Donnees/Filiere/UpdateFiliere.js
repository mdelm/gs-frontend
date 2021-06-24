import React, { Component } from 'react';
import "./UpdateFiliereStyle.css"
import { Button, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'

import filiereController from '../../services/Controllers/filiereController'

class UpdateFiliere extends Component {
    
    constructor(props){
        super(props)
        
        this.state={
            nom_filiere:props.item1.nom_filiere,
            niveau:props.item1.niveau,

        }
        this.filiereController = new filiereController()
        this.getOneFiliere()
    }
    getOneFiliere(){
        console.log('iddddddddd',localStorage.getItem('idFiliere'));
        this.filiereController.getoneFiliereById(localStorage.getItem('idFiliere')).then(res=>{
          console.log('response from get One filiere',res.data);
         
        })
    }

    handleClick = event => {
        event.preventDefault();
        let data={
            nom_filiere:this.state.nom_filiere,
            niveau:this.state.niveau,
          
        }
    
        console.log('errr');
        console.log('data',this.state);
        this.filiereController.updateFiliere(localStorage.getItem('idFiliere'),data).then(response=>{
            console.log('response',response.data);
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
            <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>modifier Filiere</h1>          </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <form>
                    <div class="group">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder={this.state.nom_filiere} style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({nom_filiere:event.target.value})} value={this.state.nom_filiere}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder={this.state.niveau} style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({niveau:event.target.value})} value={this.state.niveau}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
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

export default UpdateFiliere;