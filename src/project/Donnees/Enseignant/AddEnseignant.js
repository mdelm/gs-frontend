import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import './AddEnseignantStyle.css'

import axios from 'axios'
import enseignantController from 'src/project/services/Controllers/enseignantController';

   class AddEnseignant extends Component{
    constructor(){
        super()
        this.state={
            matricule:'',
            cin:'',
            nom:'',
            prenom:'',
            civilite:'',
            date_naissance:'',
            adresse:'',
            email:'',
            password:'',
            GSM:'',
          
       
          
        }
        this.enseignantController= new enseignantController()
    }   
     
  
      
        handleClick = event => {
            event.preventDefault();
            const data ={}
          data["matricule"]=this.state.matricule


          data["cin"]=this.state.cin
          data["nom"]=this.state.nom

          data["prenom"]=this.state.prenom


          data["civilite"]=this.state.civilite

          
          data["date_naissance"]=this.state.date_naissance

          data["adresse"]=this.state.adresse

          data["email"]=this.state.email

          data["GSM"]=this.state.GSM


            const config ={
                headers:{
                'Content-Type':'multipart/form-data'
                }
    
            }
            console.log('errr');
            console.log('data',data);
            axios.post('http://localhost:3000/enseignant/AddEnseignant',data).then(response=>{
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
            <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>Ajout Enseignant</h1>          </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <form>
                <div class="group Name2">
                    <label><i class="fas fa-address-card"></i> </label>
                        <input type="text" placeholder="matricule" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({matricule:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name1">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Nom" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({nom:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name2">
                    <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Prenom" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({prenom:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name1">
                        <label><i class="fas fa-id-card"></i> </label>
                        <input type="text" placeholder="CIN" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({cin:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name2">
                    <label><i class="fas fa-user-friends"></i> </label>
                        <input type="text" placeholder="Civilité" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({civilite:event.target.value})}/>
                        <span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name1">
                        <label><i class="fas fa-calendar-week"></i> </label>
                        <input type="date" placeholder="Date de Naissance" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({date_naissance:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                  
                    <div class="group">
                    <label><i class="fas fa-envelope"></i> </label>
                        <input type="text" placeholder="Email" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({email:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group">
                    <label><i class=""></i> </label>
                        <input type="password" placeholder="Password" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({password:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group">
                    <label><i class="fas fa-address-card"></i> </label>
                        <input type="text" placeholder="Adresse" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({adresse:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name1">
                        <label><i class="fa fa-phone-square"></i> </label>
                        <input type="text" placeholder="GSM" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({GSM:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                
                  
                   
                    <button type="button" class="button buttonBlue" style={{color:"black"}}
                    onClick={(event)=>this.handleClick(event)}>Ajouter
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

  export default AddEnseignant;