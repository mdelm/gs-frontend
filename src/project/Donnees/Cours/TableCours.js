import React, { Component } from 'react';
import axios from "axios"
import PageHeader from "../../components/PageHeader";
import coursController from '../../services/Controllers/coursController'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import AddCours from './AddCours'
import UpdateCours from './UpdateCours'



class TableCours extends Component {

      handleClick(evt){
        evt.preventDefault()
        console.log('errr');
        window.location.href='/#/UpdateCours' 
    }

    constructor(){
        super()
        this.state={
            Cours:[]
        }
        this.coursController = new coursController()
    }
    componentDidMount(){
        this.getAllCours()

    }
    getAllCours(){
        axios.get('http://localhost:3000/cours/findCours').then(response=>{
            console.log('response',response.data.data);
            this.setState({Cours:response.data.data})
        })
    }

    update(id){
        localStorage.setItem('idCours',id)
    }
    delete(id){
      this.coursController.delete(id).then(response=>{
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
            title="Cours"
            subTitle="gestion des cours"
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
        
      <AddCours
        show={this.state.show}
        onClose={() => this.showModal()}
      />
<UpdateCours
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
                              
                                </tr>
                            </thead>
                            <tbody>
                            {
                            this.state.Cours.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                          <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}}  onClick={(evt)=>{this.update(item._id) ; this.showModalUpdate(evt)} }>
                                          </i>
                                          <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={()=>this.delete(item._id)}>
                                          </i>
                                        </td>
                                        <td>{item.nom}</td>
                                       

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

export default TableCours;