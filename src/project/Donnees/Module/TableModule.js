import React, { Component } from 'react';

import axios from "axios"
import moduleController from '../../services/Controllers/moduleController'
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import AddModule from './AddModule';
import UpdateModule from './UpdateModule';
class TableModule extends Component {

    handleClick(evt){
        evt.preventDefault()
        console.log('errr');
        window.location.href='/#/UpdateModule' 
    }

    constructor(){
        super()
        this.state={
            Modules:[]
        }
        this.moduleController = new moduleController()
    }
    componentDidMount(){
        this.getAllModule()

    }
    getAllModule(){
        axios.get('http://localhost:3000/modules/findAllModule').then(response=>{
            console.log('response',response.data.data);
           
           this. setState({Modules:response.data.data})
            
        })
    }

    update(id){
        localStorage.setItem('idModule',id)
    }
    delete(id){
       this.moduleController.delete(id).then(response=>{
        console.log('response from delete module',response);
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
                title="Module"
                subTitle="gestion des Modules"
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
            
            <AddModule
        show={this.state.show}
        onClose={() => this.showModal()}
      />
    <UpdateModule
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
                            
                            this.state.Modules.map((item)=>{
                                                  
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
    

export default TableModule;