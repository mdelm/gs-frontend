import React, { Component } from 'react';
import "./UpdateEnseignantStyle.css"
import { Button, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import enseignantController from '../../services/Controllers/enseignantController'
import Modal from 'react-bootstrap/Modal'


class UpdateEnseignant extends Component {
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
        this.enseignantController = new enseignantController()
        this.getOneEnseignant()
    }

    getOneEnseignant(){
        console.log('iddddddddd',localStorage.getItem('idEnseignant'));
        this.enseignantController.getoneEseignantById(localStorage.getItem('idEnseignant')).then(res=>{
          console.log('response from get OneEnseignant',res.data);
          
        })
    }

    handleClick = event => {
        event.preventDefault();
        let data={
            nom:this.state.nom,
            cin:this.state.cin,
            matricule:this.state.matricule,
            GSM:this.state.GSM,
            prenom:this.state.prenom,
            civilite:this.state.civilite,
            date_naissance:this.state.date_naissance,
            email:this.state.email,
            adresse:this.state.adresse,
            password:this.state.password,
        }
    
    
        console.log('errr');
        console.log('data',this.state);
        this.enseignantController.update(localStorage.getItem('idEnseignant'),data).then(response=>{
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
            <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>modifier Enseignant</h1>          </Modal.Title>
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


export default UpdateEnseignant;
