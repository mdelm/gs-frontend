import React, { Component } from 'react';
import axios from "axios"
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import AddMatiere from './AddMatiere'
import UpdateMatiere from './UpdateMatiere'

import matiereController from '../../services/Controllers/matiereController'

class TableMatiere extends Component{
    
    handleClick(evt){
        evt.preventDefault()
        console.log('errr');
        window.location.href='/#/UpdateMatiere' 
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

    update(id){
        localStorage.setItem('idMatiere',id)
    }
    delete(id){
        this.matiereController.delete(id).then(response=>{
         console.log('response from delete matiere',response);
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
        })

      };
      showModalUpdate = e => {
        this.setState({
            showUpdate: true
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
        
      <AddMatiere
       show={this.state.show}
       onClose={() => this.showModal()}
     />
           
     
           <UpdateMatiere
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
export default TableMatiere;