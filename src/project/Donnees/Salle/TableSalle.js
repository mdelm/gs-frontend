import React, { useEffect, useState } from 'react';
import axios from "axios"
import salleController from '../../services/Controllers/salleController'
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import "./TableSalleStyle.css";
import {
  Table,
  Modal, 
  ModalHeader, 
  ModalBody,
  Input,
  Row,
  Col,
  Button
} from "reactstrap";

const TableSalle = props => {
  const [ salles, setSalles ] = useState([]);

  const [ modal, setModal ] = useState(false);

  const [ salleId, setSalleId ] = useState(null);
  const [ modalTitle, setModalTitle ] = useState(null);
  const [ modalBtnText, setModalBtnText ] = useState(null);

  const [ nom, setNom ] = useState("");
  const [ libelle, setLibelle ] = useState("");

  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    getAllSalle();
  }, []);

  const getAllSalle = () => {
    axios.get('http://localhost:3000/salles/findAllSalle')
      .then(response=> {
        setSalles(response.data.data);
      });
  };

  const toggle = (_item, _title, _btn_text) => {
    setModal(!modal);
    setModalTitle(_title);
    setModalBtnText(_btn_text);

    setSalleId( _item !== null ? _item._id : null);
    setNom( _item !== null ? _item.nom : "");
    setLibelle( _item !== null ? _item.libelle : "");
  };

  const addSalle = () => {
    const data = {
      nom: nom,
      libelle: libelle
    };
    axios.post('http://localhost:3000/salles/addSalle', data)
      .then(response => {
        getAllSalle();
        toggle(null, null, null);
      });
  };

  const updateSalle = () => {
    const data = {
      nom: nom,
      libelle: libelle
    };
    axios.put(`http://localhost:3000/salles/updateSalleById/${salleId}`, data)
      .then(response => {
        getAllSalle();
        toggle(null, null, null);
      });
  };

  const deleteSalle = (_id) => {
    axios.delete(`http://localhost:3000/salles/deleteOneSalle/${_id}`)
      .then(response => {
        getAllSalle();
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
                  placeholder="libelle" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setLibelle(e.target.value)} value={libelle}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <button
              type="button" 
              class="button buttonBlue" 
              style={{color:"black"}}
              onClick={() => {
                if (salleId !== null)
                  updateSalle();
                else
                  addSalle();
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
          title="Salle"
          subTitle="gestion des Salle"
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
              onClick={() => toggle(null, "Ajouter Salle", "Ajouter")}
            >
              <AddIcon /> Add New
            </Button>
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Nom</th>
              <th scope="col">Libelle</th>
            </tr>
          </thead>
          <tbody>
            {
              salles && salles
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
                      <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}} onClick={() => toggle(item, "Modifier Salle", "Modifier")}></i>
                      <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={() => deleteSalle(item._id)}></i>
                    </td>
                    <td>{item.nom}</td>
                    <td>{item.libelle}</td>
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

export default TableSalle;