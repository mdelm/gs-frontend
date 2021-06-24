import React, { Component } from 'react';
import "./UpdateEtudiantStyle.css"
import { Button, Upload} from 'antd';
import Modal from 'react-bootstrap/Modal'

import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import etudiantController from'../../services/Controllers/etudiantController'

class UpdateEtudiant extends Component {
    constructor(){
        super()
        this.state={
            matricule:'', 
            cin:'',
            nom:'',
            prenom:'',
            civilite:'',
            date_naissance:'',
            lieu_naissance:'',
            adresse:'',
            email:'',
            password:'',
            Baccalaureat:'',
            mention:'',
            parent:'',
            gsm:'',
            année:'', 
            moyenne:'',
            Groupe:'',
            emailParent:'',
        }
        this.etudiantController = new etudiantController()
        this.getOneEtudiant()

    }
   
    getOneEtudiant(){
        console.log('iddddddddd',localStorage.getItem('idEtudiant'));

        this.etudiantController.getoneEtudiantById(localStorage.getItem('idEtudiant')).then(res =>{
            console.log('response from getOne etudiant',res);
            console.log('response from get One etudiant',res.data.data);
        })
    }
    handleClick(evt){
        evt.preventDefault()
        let data={
            matricule:this.state.matricule,
            cin:this.state.cin,
            nom:this.state.nom,
            prenom:this.state.prenom,
            civilite:this.state.civilite,
            date_naissance:this.state.date_naissance,
            adresse:this.state.adresse,
            email:this.state.email,
            password:this.state.password,
            Baccalaureat:this.state.Baccalaureat,
            mention:this.state.mention,
            parent:this.state.parent,
            gsm:this.state.gsm,
            année:this.state.année,
            moyenne:this.state.moyenne,
            Groupe:this.state.Groupe,
            emailParent:this.state.emailParent,

        }

       
        console.log('data',this.state);
        this.etudiantController.UpdateEtudiant(localStorage.getItem('idEtudiant'),data).then(response=>{
          console.log('resssponse',response);
          window.location.reload()

    })
}
renderButtonText() {
    const { buttonText } = this.props;
    if (!buttonText) {
      return 'update';
    }
    return buttonText;
}
    render() {
        console.log('noommmmm',this.state.nom);
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton style={{backgroundColor:"#FFCC00"}}>
                <Modal.Title id="contained-modal-title-vcenter"> 
                <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>modifier Etudiant</h1>          </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <form>
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
                    <div class="group Name2">
                    <label><i class="fas fa-map-marker-check"></i> </label>
                        <input type="text" placeholder="Lieu de Naissance" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({lieu_naissance:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group">
                    <label><i class="fas fa-envelope"></i> </label>
                        <input type="text" placeholder="Email" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({email:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group">
                    <label><i class=""></i> </label>
                        <input type="text" placeholder="Password" style={{marginLeft:"25px"}}
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
                        onChange={event=>this.setState({gsm:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name2">
                    <label><i class="fas fa-address-card"></i> </label>
                        <input type="text" placeholder="Matricule" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({matricule:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name1">
                        <label><i class="fa fa-phone-square"></i> </label>
                        <input type="text" placeholder="Baccalaureat" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({Baccalaureat:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name2">
                    <label><i class="fas fa-address-card"></i> </label>
                        <input type="text" placeholder="Mention" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({mention:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group">
                        <label><i class="fa fa-phone-square"></i> </label>
                        <input type="text" placeholder="Parent" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({parent:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name1">
                        <label><i class="fa fa-phone-square"></i> </label>
                        <input type="text" placeholder="Email Parent" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({emailParent:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name2">
                    <label><i class="fas fa-address-card"></i> </label>
                        <input type="text" placeholder="Année" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({année:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name1">
                        <label><i class="fa fa-phone-square"></i> </label>
                        <input type="text" placeholder="Moyenne" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({moyenne:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                    <div class="group Name2">
                    <label><i class="fas fa-address-card"></i> </label>
                        <input type="text" placeholder="Groupe" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({Groupe:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
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
    
export default UpdateEtudiant;
