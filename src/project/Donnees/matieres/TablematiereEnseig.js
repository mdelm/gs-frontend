import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {Button} from 'react-bootstrap'
import axios from "axios"
import EnseignantController from '../../services/Controllers/enseignantController'
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import MaterialTable from 'material-table'
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';


import matiereController from '../../services/Controllers/matiereController'

class TablematiereEnseig extends Component{
    
    handleClick(evt){
        evt.preventDefault()
        console.log('errr');
       
    }

    constructor(){
        super()
        this.state={
            Matieres:[]
        }
        this.matiereController = new matiereController()
    }
    componentDidMount(){
        this.getAllMatiere()

    }
    getAllMatiere(){
        axios.get('http://localhost:3000/matiere/findMatiere').then(response=>{
            console.log('response',response.data.data);
            this.setState({Matieres:response.data.data})
        })
    }
        
    

    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: true
        })
    };
    
        
     
  render(){
    return (
        <div>
        <div> 
        <PageHeader
            title="Matieres"
            subTitle="gestion des Matieres"
            icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
       
        </div>
        <div>
        <div>
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Action</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Libelle</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            this.state.Matieres.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                          <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}}  onClick={(evt)=>{this.update(item._id) ; this.showModalUpdate(evt)} }>
                                          </i>
                                          <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={()=>this.delete(item._id)}>                                          </i>
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
export default TablematiereEnseig;