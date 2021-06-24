import React, { Component } from 'react';
import "./UpdateMatiereStyle.css"
import { Button} from 'antd';
import Modal from 'react-bootstrap/Modal'

import matiereController from '../../services/Controllers/matiereController';

class UpdateMatiere extends Component {
    constructor(){
        super()
        this.state={
            nom:'',
           libelle:'',
        }
        this.matiereController = new matiereController()
        this.getOneMatiere()
    }

    getOneMatiere(){
        console.log('iddddddddd',localStorage.getItem('idMatiere'));
        this.matiereController.getoneMatiereById(localStorage.getItem('idMatiere')).then(res=>{
          console.log('response from get One matiere',res.data.data);
         
        })
    }

    handleClick = event => {
        event.preventDefault();
        let data={
            nom_filiere:this.state.nom_filiere,
          
        }
    
    
        console.log('errr');
        console.log('data',this.state);
        this.matiereController.update(localStorage.getItem('idMatiere'),data).then(response=>{
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
            <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>Ajout Matieres</h1>          </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <form>
                    <div class="group ">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Nom" style={{marginLeft:"25px"}}
                        /><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group ">
                    <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Libelle" style={{marginLeft:"25px"}}
                        /><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <button type="button" class="button buttonBlue" style={{color:"black"}}
                    onClick={(event)=>this.handleClick(event)}>Modifier
                        <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
                    </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        
        );
    }

  }

export default UpdateMatiere;