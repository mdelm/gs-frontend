import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import axios from "axios"
import './AddCoursStyle.css'

import Modal from 'react-bootstrap/Modal'

class AddCours extends Component {

    constructor(){
        super()
        this.state={
            nom:''
        }
    }

    handleClick = event => {
        event.preventDefault();
        const data ={}
      data["nom"]=this.state.nom
        /*const config ={
            headers:{
            'Content-Type':'multipart/form-data'
            }

        }*/
        console.log('errr');
        console.log('data',data);
        axios.post('http://localhost:3000/cours/AddCours',data).then(response=>{
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
            <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>Ajout cours</h1>          </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <form>
                <div class="group">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Nom" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({nom:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
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



export default AddCours;