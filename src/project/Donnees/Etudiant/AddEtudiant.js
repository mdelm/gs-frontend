import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import './AddEtudiantStyle.css';
import axios from 'axios'



   class AddEtudiant extends Component{
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
      data["lieu_naissance"]=this.state.lieu_naissance
      data["adresse"]=this.state.adresse
      data["email"]=this.state.email
      data["password"]=this.state.password
      data["Baccalaureat"]=this.state.Baccalaureat
      data["mention"]=this.state.mention
      data["parent"]=this.state.parent
      data["gsm"]=this.state.gsm
      data["annee"]=this.state.année
      data["moyenne"]=this.state.moyenne
      data["Groupe"]=this.state.Groupe
      data["emailParent"]=this.state.emailParent

        const config ={
            headers:{
            'Content-Type':'multipart/form-data'
            }

        }
        console.log('errr');
        console.log('data',data);
        axios.post('http://localhost:3000/etudiants/addEtudiant',data).then(response=>{
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
            <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>Ajout Etudiant</h1>          </Modal.Title>
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

  export default AddEtudiant;