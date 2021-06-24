import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {Button} from 'react-bootstrap'
import axios from "axios"
import PageHeader from '../../../components/PageHeader'
import userController from '../../../services/Controllers/userController'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

class TableUser extends Component {

    constructor(){
        super()
        this.state={
            users:[]
        }
        this.usesrController = new userController()
    }
    componentDidMount(){
        this.getAllUsers()

    }
    getAllUsers(){
        axios.get('http://localhost:3000/userrr/finduser').then(response=>{
            console.log('response',response.data.data);
            this.setState({users:response.data.data})
        })
    }



   
  
    render(){
        return (
            <div>
            <div> 
            <PageHeader
                title="Utilisateurs"
                subTitle="Gestion des utilisateurs"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
           
            </div>
            <div>
            <div>
                                <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Matricule</th>
                                  <th scope="col">Password </th>
                                   <th scope="col">Role </th>
                                  
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                this.state.users.map((item)=>{
                                    return(
                                        <tr>
                                           
                                            <td>{item.matricule}</td>
                                            
                                            <td>{item.password}</td>
                                            <td>{item.__t}</td>

    
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
export default TableUser;