import React, { Component } from 'react';

import axios from "axios"
import filiereController from '../../services/Controllers/filiereController'
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import AddFiliere from './AddFiliere'
import {Button,Modal} from 'react-bootstrap'
import UpdateFiliere from './UpdateFiliere'


class TableFiliere extends Component {

      handleClick(evt){
        evt.preventDefault()
        console.log('errr');
    }

    constructor(){
        super()
        this.state={
            Filieres:[],
            item1:{},
            show1:false
        }
        this.filiereController = new filiereController()
    }
    handleClose = (e) => {this.setState({show1:false})};
    handleShow = (e) => {this.setState({show1:true})};
    componentDidMount(){
        this.getAllFiliere()

    }
    getAllFiliere(){
        axios.get('http://localhost:3000/filiere/findfiliere').then(response=>{
            console.log('response',response.data.data);
           
           this. setState({Filieres:response.data.data})
            
        })
    }

    update(id){
        localStorage.setItem('idFiliere',id)
    }
    delete(id){
       this.filiereController.delete(id).then(response=>{
        console.log('response from delete filiere',response);
        window.location.reload()

       })
    }
    

    state = {
        show: false,
        showUpdate:false,
        showdelete:false
        


      };
      showModal = e => {
        this.setState({
          show: true
        });

      };
      closeModal = ()=> {
        this.setState({
          show:false
        })
      }
      showModalUpdate = e => {
        this.setState({
          showUpdate: true
        });
        
      };
      showModaldelete = e => {
        this.setState({
          showdelete: true
        });
      };
    render(){

    return (
      
      
        <div>
        <div> 
        <PageHeader
            title="Filiere"
            subTitle="gestion des Filieres"
            icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
        <Controls.Button1
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            style={{left:'930px',
            bottom:'110px',
            color:'black',
            border: '1px solid black'}}
            variant="primary" onClick={e => {this.showModal(e);}}
        />
        
      <AddFiliere
        show={this.state.show}
        onClose={() => this.showModal()}
      />
      <UpdateFiliere
              show={this.state.showUpdate}
              onClose={() => this.showModalUpdate()}
              item1={this.state.item1}
      />
      <deleteFiliere
      
        show={this.state.showdelete}
        onClose={() => this.showModaldelete()}
      />
        </div>
        <div>
        <div>
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Action</th>
                                <th scope="col">Nom de Filiere</th>
                                <th scope="col">Niveau</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            
                            this.state.Filieres?.map((item)=>{
                                                  
                                return(
                                    <tr>
                                        <td>
                                          <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}}  onClick={(evt)=>{this.update(item._id);this.setState({item1:item}) ; this.showModalUpdate(evt)} }>
                                          </i>
                                          <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={(e)=> this.handleShow(e)}>
                                          </i>
                                        </td>
                                        <td>{item.nom_filiere}</td>
                                        <td>{item.niveau}</td>
                                  
                                        <Modal show={this.state.show1} onHide={this.handleClose}>
                                      <Modal.Header closeButton>
                                      </Modal.Header>
                                      <Modal.Body> êtes vous sûr de vouloir supprimer cet enregistrement?</Modal.Body>
                                      <Modal.Footer>
                                        <Button variant="secondary" onClick={(e)=>this.handleClose(e)}>
                                          Non
                                        </Button>
                                        <Button variant="secondary" onClick={()=>this.delete(item._id)}> 
                                                                                 Oui
                                        </Button>
                                      </Modal.Footer>
                                    </Modal>
                                    </tr>
                                )
                                
                            })
                            }
                          
                            </tbody>
                            </table>
                        </div>

    </div>
    </div>
    );
}
}

export default TableFiliere;