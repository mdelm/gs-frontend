import React, { useEffect, useState } from 'react';
import axios from "axios"
import departementController from '../../services/Controllers/departementController';
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import "./TableDepartementStyle.css";
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

const TableDepartement = props => {
  const [ departements, setDepartements ] = useState([]);

  const [ modal, setModal ] = useState(false);

  const [ departementId, setDepartementId ] = useState(null);
  const [ modalTitle, setModalTitle ] = useState(null);
  const [ modalBtnText, setModalBtnText ] = useState(null);

  const [ nom, setNom ] = useState("");
  const [ responsableDepartement, setResponsableDepartement ] = useState("");
  const [ libelle, setLibelle ] = useState("");

  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    getAllDepartements();
  }, []);

  const getAllDepartements = () => {
    axios.get('http://localhost:3000/departements/findAllDepartement')
      .then(response => {
        setDepartements(response.data.data);
      });
  };

  const toggle = (_item, _title, _btn_text) => {
    setModal(!modal);
    setModalTitle(_title);
    setModalBtnText(_btn_text);

    console.log(_item);

    setDepartementId( _item !== null ? _item._id : null);
    setNom( _item !== null ? _item.nom : "" );
    setResponsableDepartement( _item !== null ? _item.responsableDepartement : "");
    setLibelle( _item !== null ? _item.libelle : "" );
  };

  const addDepartement = () => {
    const data = { nom, responsableDepartement, libelle };
    axios.post('http://localhost:3000/departements/addDepartement', data)
      .then(response => {
        getAllDepartements();
        toggle(null, null, null);
      });
  };

  const updateDepartement = () => {
    const data = { nom, responsableDepartement, libelle };
    axios.put(`http://localhost:3000/departements/updateDepartementById/${departementId}`, data)
      .then(response => {
        getAllDepartements();
        toggle(null, null, null);
      });
  };

  const deleteDepartement = (_id) => {
    axios.delete(`http://localhost:3000/departements/deleteOneDepartement/${_id}`)
      .then(response => {
        getAllDepartements();
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
                  placeholder="Libelle" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setLibelle(e.target.value)} value={libelle}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="text" 
                  placeholder="Responsable" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setResponsableDepartement(e.target.value)} value={responsableDepartement}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <button
              type="button" 
              class="button buttonBlue" 
              style={{color:"black"}}
              onClick={() => {
                if (departementId !== null)
                  updateDepartement();
                else
                  addDepartement();
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
          title="Departement"
          subTitle="gestion des departement"
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
              onClick={() => toggle(null, "Ajouter Departement", "Ajouter")}
            >
              <AddIcon /> Add New
            </Button>
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Nom de Departement</th>
              <th scope="col">Responsable</th>
            </tr>
          </thead>
          <tbody>
            {
              departements && departements
              .filter(item => {
                if (searchTerm)
                  return item.nom.toLowerCase().includes(searchTerm.toLowerCase());
                else
                  return true;
              })
              .map((item)=>{
                return(
                  <tr>
                    <td>
                      <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}} onClick={() => toggle(item, "Modifier Departement", "Modifier")}></i>
                      <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={() => deleteDepartement(item._id)}></i>
                    </td>
                    <td>{item.nom} ({item.libelle})</td>
                    <td>{item.responsableDepartement}</td>
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

export default TableDepartement;