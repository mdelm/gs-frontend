import React, { Component } from 'react';
import {Button,Modal} from 'react-bootstrap'
import axios from "axios"
import departementController from '../../services/Controllers/departementController'
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import AddDepartement from './AddDepartement'
import UpdateDepartement from './UpdateDepartement'

class TableDepartement extends Component {
  
   

      handleClick(evt){
        evt.preventDefault()
        console.log('errr');
        window.location.reload()
    }

    constructor(){
        super()
        this.state={
            Departements:[],
            item1:{},
            show1:false
        }
        this.departementController = new departementController()
    }
    handleClose = (e) => {this.setState({show1:false})};
   handleShow = (e) => {this.setState({show1:true})};
    componentDidMount(){
        this.getAllDepartement()

    }
    getAllDepartement(){
        axios.get('http://localhost:3000/departements/findAllDepartement').then(response=>{
            console.log('response',response.data.data);
            this.setState({Departements:response.data.data})
        })
    }

    update(id){
        localStorage.setItem('idDepartement',id)
        console.log('idDepartement',localStorage.getItem('idDepartement'));
    }
    delete(id){
      this.departementController.deleteDepartement(id).then(response=>{
       console.log('response from delete departement',response);
       window.location.reload()

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
    render(){
    return (
        <div>
        <div> 
        <PageHeader
            title="Departement"
            subTitle="gestion des departement"
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
        
      <AddDepartement
        show={this.state.show}
        onClose={() => this.setState({show:false})}
      />
<UpdateDepartement
        show={this.state.showUpdate}
        onClose={() => this.showModalUpdate()}
        item1={this.state.item1}
      />
        </div>
        <div>
        <div>
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Action</th>
                                <th scope="col">Nom </th>
                                <th scope="col">responsableDepartement</th>
                                <th scope="col">Libelle</th>

                                </tr>
                            </thead>
                            <tbody>

                            {
                            this.state.Departements?.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                          <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}}  onClick={(evt)=>{this.update(item._id) ; ;this.setState({item1:item}) ; this.showModalUpdate(evt)} }>
                                          </i>
                                          <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={(e)=> this.handleShow(e)}>
                                          </i>
                                        </td>
                                        <td>{item.nom}</td>
                                        <td>{item.responsableDepartement}</td>
                                        <td>{item.libelle}</td>
                                      <Modal show={this.state.show1} onHide={this.handleClose}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                      <Modal.Footer>
                                        <Button variant="secondary" onClick={(e)=>this.handleClose(e)}>
                                          Close
                                        </Button>
                                        <Button variant="secondary" onClick={()=>this.delete(item._id)}> 
                                        yes                                         Save Changes
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

export default TableDepartement;

