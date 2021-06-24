import React, { Component } from 'react';

import { Button, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Modal from 'react-bootstrap/Modal'
import './UpdateDevoirStyle.css' ;
import devoirController from '../../services/Controllers/devoirController'
class UpdateDevoir extends Component {
    constructor(){
        super()
        this.state={
            nom:'',
            prof:'',
        }
        this.devoirController = new devoirController()
        this.getOneDevoirs()
    }

    getOneDevoirs(){
        console.log('iddddddddd',localStorage.getItem('idDevoir'));
        this.devoirController.getoneDevoirsById(localStorage.getItem('idDevoir')).then(res=>{
          console.log('response from get OneDevoir',res.data);
         
        })
    }

    handleClick = event => {
        event.preventDefault();
        let data={
            nom:this.state.nom,
           
            prof:this.state.prof
        }
    
     
   
    
        console.log('errr');
        console.log('data',this.state);
        this.devoirController.update(localStorage.getItem('idDevoir'),data).then(response=>{
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

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton style={{backgroundColor:"#FFCC00"}}>
                <Modal.Title id="contained-modal-title-vcenter"> 
                <h1  style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>modifier devoirs</h1>          </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form>
                    <div class="group">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Nom" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({nom:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
                    </div>
                       
                    <div class="group">
                        <label><i class="fa fa-user"></i> </label>
                        <input type="text" placeholder="Prof" style={{marginLeft:"25px"}}
                        onChange={event=>this.setState({prof:event.target.value})}/><span class="highlight"style={{marginLeft:"25px"}} /><span class="bar" style={{marginLeft:"25px"}}></span>
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

export default UpdateDevoir;