import React, { useEffect, useState } from 'react';
import axios from "axios"
import filiereController from '../../services/Controllers/filiereController';
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import "./TableFiliereStyle.css";
import {
  Table,
  Modal, 
  ModalHeader, 
  ModalBody,
  Input,
  Row,
  Col,
  Button,
  Alert
} from "reactstrap";

const TableFiliere = props => {
  const [ filieres, setFilieres ] = useState([]);

  const [ modal, setModal ] = useState(false);

  const [ filiereId, setFiliereId ] = useState(null);
  const [ modalTitle, setModalTitle ] = useState(null);
  const [ modalBtnText, setModalBtnText ] = useState(null);

  const [ nom, setNom ] = useState("");
  const [ niveau, setNiveau ] = useState("");

  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    getAllFilieres();
  }, []);

  const getAllFilieres = () => {
    axios.get('http://localhost:3000/filiere/findfiliere')
      .then(response => {
        setFilieres(response.data.data);
      });
  };

  const toggle = (_item, _title, _btn_text) => {
    setModal(!modal);
    setModalTitle(_title);
    setModalBtnText(_btn_text);

    console.log(_item);

    setFiliereId( _item !== null ? _item._id : null);
    setNom( _item !== null ? _item.nom_filiere : "" );
    setNiveau( _item !== null ? _item.niveau : "");
  };

  const addFiliere = () => {
    const data = { 
        nom_filiere: nom,
        niveau: niveau
    };
    axios.post('http://localhost:3000/filiere/addfiliere', data)
      .then(response => {
        getAllFilieres();
        toggle(null, null, null);
      });
  };

  const updateFiliere = () => {
    const data = { 
        nom_filiere: nom,
        niveau: niveau
    };
    axios.put(`http://localhost:3000/filiere/updatefiliereMatiere/${filiereId}`, data)
      .then(response => {
        getAllFilieres();
        toggle(null, null, null);
      });
  };

  const deleteFiliere = (_id) => {
    axios.delete(`http://localhost:3000/filiere/filieredeleteById/${_id}`)
      .then(response => {
        getAllFilieres();
      });
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => toggle(null, null, null)} size="lg">
        <ModalHeader toggle={() => toggle(null, null, null)} style={{backgroundColor:"#FFCC00"}}>
          <div id="contained-modal-title-vcenter">
            <h1 style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>{modalTitle}</h1>
          </div>
        </ModalHeader>
        <ModalBody>     
          <form>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="text" 
                  placeholder="Nom" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setNom(e.target.value)} value={nom}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="text" 
                  placeholder="Niveau" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setNiveau(e.target.value)} value={niveau}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <button
              type="button" 
              class="button buttonBlue" 
              style={{color:"black"}}
              onClick={() => {
                if (filiereId !== null)
                  updateFiliere();
                else
                  addFiliere();
              }}
            >
              {modalBtnText}
              <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
            </button>
          </form>
        </ModalBody>
      </Modal>
      <div> 
        <PageHeader
          title="Filiere"
          subTitle="gestion des filiere"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
      </div>
      <div>
        <Row className="mb-3" >
          <Col md="9">
            <Input type="text" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} placeholder="rechercher par nom"/>
          </Col>
          <Col>
            <Button
              color="dark"
              outline
              block
              onClick={() => toggle(null, "Ajouter Filiere", "Ajouter")}
            >
              <AddIcon /> Add New
            </Button>
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Nom de Filiere</th>
              <th scope="col">Niveau</th>
            </tr>
          </thead>
          <tbody>
            {
              filieres && filieres
              .filter(item => {
                if (searchTerm)
                  return item.nom_filiere.toLowerCase().includes(searchTerm.toLowerCase());
                else
                  return true;
              })
              .map((item)=>{
                return(
                  <tr>
                    <td>
                      <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}} onClick={() => toggle(item, "Modifier Filiere", "Modifier")}></i>
                      <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={() => deleteFiliere(item._id)}></i>
                    </td>
                    <td>{item.nom_filiere}</td>
                    <td>{item.niveau}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableFiliere;