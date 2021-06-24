import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import './AddFiliereStyle.css';
import axios from 'axios'



   class AddFiliere extends Component{
    constructor(){
        super()
        this.state={
            nom_filiere:'',

            niveau:''
        }
    }

    handleClick = event => {
        event.preventDefault();
        const data ={}
      data["nom_filiere"]=this.state.nom_filiere
      data["niveau"]=this.state.niveau
        const config ={
            headers:{
            'Content-Type':'multipart/form-data'
            }

        }
        console.log('errr');
        console.log('data',data);
        axios.post('http://localhost:3000/filiere/addfiliere',data).then(response=>{
            console.log('response',response);
           window.location.reload()
        })
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
            <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>Ajout Filiere</h1>          </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <form>
                    <div class="group">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Nom de Filiere" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({nom_filiere:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group">
                    <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Niveau" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({niveau:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <button type="button" class="button buttonBlue" style={{color:"black"}}
                    onClick={(event)=>this.handleClick(event)}>Ajouter
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

  export default AddFiliere;