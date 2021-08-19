import React, { useEffect, useState } from 'react';
import axios from "axios"
import enseignantController from '../../services/Controllers/enseignantController';
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import "./TableEnseignantStyle.css";
import {
  Table,
  Modal, 
  ModalHeader, 
  ModalBody,
  ModalFooter,
  Input,
  Row,
  Col,
  Button,
  Alert,
  Container,
  FormGroup,
  Label
} from "reactstrap";

const TableEnseignant = props => {
  const [ enseignants, setEnseignants ] = useState([]);
  const [ departements, setDepartements ] = useState([]);

  const [ modal, setModal ] = useState(false);

  const [ enseignantId, setEnseignantId ] = useState(null);
  const [ modalTitle, setModalTitle ] = useState(null);
  const [ modalBtnText, setModalBtnText ] = useState(null);

  const [ matricule, setMatricule ] = useState("");
  const [ cin, setCin ] = useState("");
  const [ nom, setNom ] = useState("");
  const [ prenom, setPrenom ] = useState("");
  const [ dateNaissance, setDateNassance ] = useState("");
  const [ adresse, setAdresse ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ gsm, setGsm ] = useState("");
  const [ departement, setDepartement ] = useState(null);

  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    getAllEnseignants();
    getAllDepartements();
  }, []);

  useEffect(() => {
    if (departements.length !== 0) setDepartement(departements[0]);
  }, [departements]);

  const getAllEnseignants = () => {
    axios.get('http://localhost:3000/enseignant/findEnseignent')
      .then(response => {
        setEnseignants(response.data.data);
      });
  };

  const getAllDepartements = () => {
    axios.get("http://localhost:3000/departements/findAllDepartement")
      .then(res => {
        setDepartements(res.data.data);
      })
  };

  const toggle = (_item, _title, _btn_text) => {
    setModal(!modal);
    setModalTitle(_title);
    setModalBtnText(_btn_text);

    console.log(_item);

    setEnseignantId( _item !== null ? _item._id : null);
    setMatricule( _item !== null ? _item.matricule : "");
    setCin( _item !== null ? _item.cin : "");
    setNom( _item !== null ? _item.nom : "" );
    setPrenom( _item !== null ? _item.prenom : "");
    setDateNassance( _item !== null ? _item.date_naissance : "");
    setAdresse( _item !== null ? _item.adresse : "" );
    setEmail( _item !== null ? _item.email : "" );
    setGsm( _item !== null ? _item.GSM : "");
    setDepartement( _item !== null ? departements.find(dep => dep._id === _item.departement) : null )
    setPassword("");
  };

  const addEnseignant = () => {
    const data = { 
        matricule,
        cin,
        nom,
        prenom,
        date_naissance: dateNaissance,
        adresse,
        email,
        password,
        GSM: gsm,
        departement: departement ? departement._id : ""
    };
    axios.post('http://localhost:3000/enseignant/AddEnseignant', data)
      .then(response => {
        getAllEnseignants();
        toggle(null, null, null);
      });
  };

  const updateEnseignant = () => {
    const data = { 
        matricule,
        cin,
        nom,
        prenom,
        date_naissance: dateNaissance,
        adresse,
        email,
        GSM: gsm,
        departement: departement ? departement._id : ""
    };
    axios.put(`http://localhost:3000/enseignant/updateEnseignant/${enseignantId}`, data)
      .then(response => {
        getAllEnseignants();
        toggle(null, null, null);
      });
  };

  const deleteEnseignant = (_id) => {
    axios.delete(`http://localhost:3000/enseignant/EnseignantdeleteById/${_id}`)
      .then(response => {
        getAllEnseignants();
      });
  };

  const getDepartementNomById = (_id) => {
    const dep = departements.find(dp => dp._id === _id);
    if (dep) {
      return `${dep.nom} (${dep.libelle})`;
    } else {
      return "---";
    }
  };

  return (
    <Container>
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
                  placeholder="Matricule" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setMatricule(e.target.value)} value={matricule}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <Alert color="info">
                CIN doit etre de 8 caractères contenant des chiffres numérique
            </Alert>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="text" 
                  placeholder="CIN" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setCin(e.target.value)} value={cin}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
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
                  placeholder="Prenom" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setPrenom(e.target.value)} value={prenom}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="date" 
                  placeholder="Date de naisssance" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setDateNassance(e.target.value)} value={dateNaissance}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="text" 
                  placeholder="Adresse" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setAdresse(e.target.value)} value={adresse}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="text" 
                  placeholder="Email" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setEmail(e.target.value)} value={email}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <Alert color="info">
                mot de passe doit etre de 8 à 15 caractères contenant au moins une lettre minuscule,
                une lettre majuscule, un chiffre numérique et un caractère spécial
            </Alert>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="password" 
                  placeholder="Mot de passe" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setPassword(e.target.value)} value={password}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="text" 
                  placeholder="GSM" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setGsm(e.target.value)} value={gsm}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <FormGroup>
              <Label style={{position: "relative"}}>Departement</Label>
              <Input type="select"
                onChange={e => setDepartement( departements.find(dep => dep._id === e.target.value) )}
                value={departement ? departement._id : ""}
              >
                <option value="">---</option>
                {
                  departements && departements.map((dep, idx) => <option key={idx} value={dep._id}>{dep.nom} ({dep.libelle})</option>)
                }
              </Input>
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <button
              type="button" 
              class="button buttonBlue" 
              style={{color:"black"}}
              onClick={() => {
                if (enseignantId !== null)
                  updateEnseignant();
                else
                  addEnseignant();
              }}
            >
              {modalBtnText}
              <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
            </button>
        </ModalFooter>
      </Modal>
      <div> 
        <PageHeader
          title="Enseignant"
          subTitle="gestion des enseignant"
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
              onClick={() => toggle(null, "Ajouter Enseignant", "Ajouter")}
            >
              <AddIcon /> Add New
            </Button>
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Matricule</th>
              <th scope="col">CIN</th>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Departement</th>
            </tr>
          </thead>
          <tbody>
            {
              enseignants && enseignants
              .filter(item => {
                if (searchTerm)
                  return (item.nom.toLowerCase() + item.prenom.toLowerCase()).includes(searchTerm.toLowerCase());
                else
                  return true;
              })
              .map((item)=>{
                return(
                  <tr>
                    <td>
                      <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}} onClick={() => toggle(item, "Modifier Enseignant", "Modifier")}></i>
                      <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={() => deleteEnseignant(item._id)}></i>
                    </td>
                    <td>{item.matricule}</td>
                    <td>{item.cin}</td>
                    <td>{item.nom}</td>
                    <td>{item.prenom}</td>
                    <td>{getDepartementNomById(item.departement)}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableEnseignant;