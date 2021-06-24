import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {Button} from 'react-bootstrap'
import axios from "axios"
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import devoirController from '../../services/Controllers/devoirController'
import AddDevoir from './AddDevoir'
import UpdateDevoir from './UpdateDevoir'

class TableDevoirs extends Component {
   
    handleClick(evt){
        evt.preventDefault()
        console.log('errr');
        window.location.href='/#/UpdateDevoir' 
    }

    constructor(){
        super()
        this.state={
            Devoirs:[]
        }
        this.devoirController = new devoirController()
    }
    componentDidMount(){
        this.getAllDevoir()

    }
    getAllDevoir(){
        axios.get('http://localhost:3000/devoir/finddevoir').then(response=>{
          console.log('response',response.data.data);
          this.setState({Devoirs:response.data.data})
        })
    }

    update(id){
        localStorage.setItem('idDevoir',id)
    }
    delete(id){
      this.devoirController.delete(id).then(response=>{
       console.log('response from delete devoir',response);
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
                title="Devoirs"
                subTitle="gestion des devoirs"
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
           
          <AddDevoir
            show={this.state.show}
            onClose={() => this.showModal()}
          />
           
    <UpdateDevoir
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
                                    <th scope="col">Nom </th>
                                    <th scope="col">Prof </th>

                                  
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                this.state.Devoirs?.map((item)=>{
                                    return(
                                        <tr>
                                            <td>
                                              <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}}  onClick={(evt)=>{this.update(item._id) ; this.showModalUpdate(evt)} }>
                                              </i>
                                              <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={()=>this.delete(item._id)}>
                                              </i>
                                            </td>
                                            <td>{item.nom}</td>
                                            <td>{item.prof}</td>
    
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
export default TableDevoirs;