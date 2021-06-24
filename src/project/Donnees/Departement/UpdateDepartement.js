import React, { Component } from 'react';
import "./UpdateDepartementStyle.css"

import departementController from'../../services/Controllers/departementController'
import Modal from 'react-bootstrap/Modal'
class UpdateDepartement extends Component {
    constructor(){
        super()
        this.state={
            nom:'',
            responsableDepartement:'',
            libelle:''
        }
        this.departementController = new departementController()
        this.getOneDepartement()

    }
   
    getOneDepartement(){
        console.log('iddddddddd',localStorage.getItem('idDepartement'));

        this.departementController.getoneDepartementById(localStorage.getItem('idDepartement')).then(res =>{
            console.log('response from getOne departement',res);
            this.setState({nom:res.data.nom})
        })
    }
    handleClick(evt){
        evt.preventDefault()
        let data={
            nom:this.state.nom,
            responsableDepartement:this.state.responsableDepartement,
            libelle:this.state.libelle
         
        }

       
        console.log('data',this.state);
        this.departementController.updateDepartement(localStorage.getItem('idDepartement'),data).then(response=>{
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
                <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>modifier Departement</h1>          </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form>
                        <div class="group">
                            <label><i class="fa fa-user"></i> </label>
                            <input type="text" placeholder={this.state.nom} style={{marginLeft:"25px"}}
                            defaultValue={this.state.nom}
                            onChange={event=>this.setState({nom:event.target.value})} 
                            /><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                        </div>
                        <div class="group">
                            <label><i class="fa fa-user"></i> </label>
                            <input type="text" placeholder={this.state.responsableDepartement} style={{marginLeft:"25px"}}
                            onChange={event=>this.setState({responsableDepartement:event.target.value})} value={this.state.responsableDepartement}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                        </div>
                        <div class="group">
                            <label><i class="fa fa-user"></i> </label>
                            <input type="text" placeholder={this.state.libelle} style={{marginLeft:"25px"}}
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
    
export default UpdateDepartement;
