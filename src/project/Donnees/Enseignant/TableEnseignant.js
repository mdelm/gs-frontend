import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {Button} from 'react-bootstrap'
import axios from "axios"
import etudiantContoller from '../../services/Controllers/etudiantController'
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import enseignantController from 'src/project/services/Controllers/enseignantController';
import AddEnseignant from './AddEnseignant'
import UpdateEnseignant from './UpdateEnseignant'

class TableEnseignant extends Component {

  

handleClick(evt){
    evt.preventDefault()
    console.log('errr');
    window.location.reload()
}

constructor(){
    super()
    this.state={
        Enseignants:[]
    }
    this.enseignantController = new enseignantController()
}
componentDidMount(){
    this.getAllEnseignant()

}
getAllEnseignant(){
    axios.get('http://localhost:3000/enseignant/findEnseignent').then(response=>{
        console.log('response',response.data.data);
        this.setState({Enseignants:response.data.data})
    })
}

update(id){
    localStorage.setItem('idEnseignant',id)
}
delete(id){
    this.enseignantController.delete(id).then(response=>{
     console.log('response from delete enseignant',response);
    })
 }


    state = {
        show: false,
        showUpdate:false
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
      render(){

    return (
        <div>
        <div> 
        <PageHeader
            title="Enseignant"
            subTitle="gestion des enseignant"
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
        <AddEnseignant
        show={this.state.show}
        onClose={() => this.showModal()}
      />

<UpdateEnseignant
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
                                <th scope="col">Matricule</th>
                                <th scope="col">CIN</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prenom</th>
                               
                                </tr>
                            </thead>

                            <tbody>
                            {
                            this.state.Enseignants?.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                          <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}} onClick={(evt)=>{this.update(item._id) ; this.showModalUpdate(evt)} }>
                                          </i>
                                          <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={()=>this.delete(item._id)}>
                                          </i>
                                        </td>
                                        <td>{item.matricule}</td>
                                        <td>{item.cin}</td>
                                        <td>{item.nom}</td>
                                        <td>{item.prenom}</td>
                                      

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
export default TableEnseignant;