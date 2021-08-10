import React, { useEffect, useState } from 'react';
import axios from "axios"
import matiereController from '../../services/Controllers/matiereController'
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import "./TableMatiereStyle.css";
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

const TableMatiere = props => {
  const [ matieres, setMatieres ] = useState([]);

  const [ modal, setModal ] = useState(false);

  const [ matiereId, setMatiereId ] = useState(null);
  const [ modalTitle, setModalTitle ] = useState(null);
  const [ modalBtnText, setModalBtnText ] = useState(null);

  const [ nom, setNom ] = useState("");
  const [ libelle, setLibelle ] = useState("");
  const [ coef, setCoef ] = useState("");
  const [ semestre, setSemestre ] = useState("");

  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    getAllMatiere();
  }, []);

  const getAllMatiere = () => {
    axios.get('http://localhost:3000/matiere/findMatiere')
      .then(response => {
        setMatieres(response.data.data);
      });
  };

  const toggle = (_item, _title, _btn_text) => {
    setModal(!modal);
    setModalTitle(_title);
    setModalBtnText(_btn_text);

    console.log(_item);

    setMatiereId( _item !== null ? _item._id : null);
    setNom( _item !== null ? _item.nom : "");
    setLibelle( _item !== null ? _item.libelle : "");
    setCoef( _item !== null ? _item.coef : "" );
    setSemestre( _item !== null ? _item.semestre : "");
  };

  const addMatiere = () => {
    const data = { nom, libelle, coef, semestre };
    axios.post('http://localhost:3000/matiere/addMatiere', data)
      .then(response => {
        getAllMatiere();
        toggle(null, null, null);
      });
  };

  const updateMatiere = () => {
    const data = { nom, libelle, coef, semestre };
    axios.put(`http://localhost:3000/matiere/updateMatiere/${matiereId}`, data)
      .then(response => {
        getAllMatiere();
        toggle(null, null, null);
      });
  };

  const deleteMatiere = (_id) => {
    axios.delete(`http://localhost:3000/matiere/matieredeleteById/${_id}`)
      .then(response => {
        getAllMatiere();
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
                  placeholder="Coef" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setCoef(e.target.value)} value={coef}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="text" 
                  placeholder="Semestre" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setSemestre(e.target.value)} value={semestre}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <button
              type="button" 
              class="button buttonBlue" 
              style={{color:"black"}}
              onClick={() => {
                if (matiereId !== null)
                  updateMatiere();
                else
                  addMatiere();
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
          title="Matiere"
          subTitle="gestion des matieres"
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
              onClick={() => toggle(null, "Ajouter Matiere", "Ajouter")}
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
              <th scope="col">Semestre</th>
              <th scope="col">Coef.</th>
            </tr>
          </thead>
          <tbody>
            {
              matieres && matieres
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
                      <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={() => deleteMatiere(item._id)}></i>
                    </td>
                    <td>{item.nom}</td>
                    <td>{item.libelle}</td>
                    <td>{item.semestre}</td>
                    <td>{item.coef}</td>
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

export default TableMatiere;