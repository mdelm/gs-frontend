import React, { Component } from 'react';

import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {Button} from 'react-bootstrap'
import axios from "axios"
import salleController from '../../services/Controllers/salleController'
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import AddSalle from './AddSalle';
import UpdateSalle from './UpdateSalle';
class TableSalle extends Component {

    handleClick(evt){
        evt.preventDefault()
        console.log('errr');
        window.location.href='/#/UpdateSalle' 
    }

    constructor(){
        super()
        this.state={
            Salles:[]
        }
        this.salleController = new salleController()
    }
    componentDidMount(){
        this.getAllSalle()

    }
    getAllSalle(){
        axios.get('http://localhost:3000/salles/findAllSalle').then(response=>{
            console.log('response',response.data.data);
           
           this. setState({Salles:response.data.data})
            
        })
    }

    update(id){
        localStorage.setItem('idSalle',id)

    }
    delete(id){
       this.salleController.delete(id).then(response=>{
        console.log('response from delete salle',response);
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
                title="Salle"
                subTitle="gestion des Salle"
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
            
            <AddSalle
        show={this.state.show}
        onClose={() => this.showModal()}
      />
  <UpdateSalle
      show={this.state.showUpdate}
      onClose={() => this.showModalUpdate()}
      />
            </div>
            <div>
            <div>
                                <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Action</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">libelle</th>
                                    </tr>
                                </thead>

                                <tbody>
                            {
                            
                            this.state.Salles?.map((item)=>{
                                                  
                                return(
                                    <tr>
                                        <td>
                                          <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}}  onClick={(evt)=>{this.update(item._id) ; this.showModalUpdate(evt)} }>
                                          </i>
                                          <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={()=>this.delete(item._id)}>
                                          </i>
                                        </td>
                                        <td>{item.nom}</td>
                                        <td>{item.libelle}</td>
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
    

export default TableSalle;