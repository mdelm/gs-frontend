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
  Label,
  ListGroup, 
  ListGroupItem,
} from "reactstrap";
import { format } from "date-fns";

const TableEnseignant = props => {
  const [ enseignants, setEnseignants ] = useState([]);
  const [ departements, setDepartements ] = useState([]);

  const [ modal, setModal ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);

  const [ enseiToDelete, setEnseiToDelete ] = useState(null);

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

  const [ leftDeps, setLeftDeps ] = useState([]);
  const [ rightDeps, setRightDeps ] = useState([]);

  const [ searchTerm, setSearchTerm ] = useState("");

  const [ errors, setErrors ] = useState({});

  const [ alertMessage, setAlertMessage ] = useState("");
  const [ visible, setVisible ] = useState(false);

  const onDismiss = () => setVisible(false);

  useEffect(() => {
    getAllEnseignants();
    getAllDepartements();
  }, []);

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
    if (modal === true) setErrors({});
    
    setModal(!modal);
    setModalTitle(_title);
    setModalBtnText(_btn_text);

    console.log(_item);

    setEnseignantId( _item !== null ? _item._id : null);
    setMatricule( _item !== null ? _item.matricule : "");
    setCin( _item !== null ? _item.cin : "");
    setNom( _item !== null ? _item.nom : "" );
    setPrenom( _item !== null ? _item.prenom : "");
    setDateNassance( _item !== null ? format(new Date(_item.date_naissance), "yyyy-MM-dd") : "");
    setAdresse( _item !== null ? _item.adresse : "" );
    setEmail( _item !== null ? _item.email : "" );
    setGsm( _item !== null ? _item.GSM : "");
    setPassword("");

    if (_item !== null) {
      setLeftDeps(departements.filter(dep => _item.departements.includes(dep._id)));
      setRightDeps(departements.filter(dep => !_item.departements.includes(dep._id)));
    } else {
      setLeftDeps([]);
      setRightDeps(departements);
    }
  };

  const toggleConfirm = (_id) => {
    if (_id !== null && isOpen === false) {
      setEnseiToDelete(_id);
    } else {
      setEnseiToDelete(null);
    }

    setIsOpen(!isOpen);
  };

  const addDep = (_dep) => {
    setLeftDeps([...leftDeps, _dep]);
    setRightDeps(rightDeps.filter(dep => dep._id !== _dep._id));
  };

  const suppDep = (_dep) => {
    setLeftDeps(leftDeps.filter(dep => dep._id !== _dep._id));
    setRightDeps([...rightDeps, _dep]);
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
        departements: leftDeps.map(dep => ({ _id: dep._id }))
    };
    axios.post('http://localhost:3000/enseignant/AddEnseignant', data)
      .then(response => {
        getAllEnseignants();
        toggle(null, null, null);
        setAlertMessage("Enseignant ajouter avec succ??es");
        setVisible(true);
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
        departements: leftDeps.map(dep => ({ _id: dep._id }))
    };
    axios.put(`http://localhost:3000/enseignant/updateEnseignant/${enseignantId}`, data)
      .then(response => {
        getAllEnseignants();
        toggle(null, null, null);
        setAlertMessage("Enseignant modifier avec succ??es");
        setVisible(true);
      });
  };

  const deleteEnseignant = () => {
    axios.delete(`http://localhost:3000/enseignant/EnseignantdeleteById/${enseiToDelete}`)
      .then(response => {
        getAllEnseignants();
        setAlertMessage("Enseignant supprimer avec succ??es");
        setVisible(true);
      });
  };

  const getEnseignantName = () => {
    if (enseiToDelete !== null) {
      const ensei = enseignants.find(e => e._id === enseiToDelete);
      return `${ensei.nom} ${ensei.prenom}`;
    }

    return "";
  };

  const validateForm = (e) => {
    const { name, value } = e.target;
    let msg = "";

    switch (name) {

      case "cin":
        if (value === "") {
          msg = "requis";
        } else if (!/^[0-9]{8}$/.test(value)) {
          msg = "CIN doit etre de 8 caract??res contenant des chiffres num??rique";
        }
        setErrors({
          ...errors,
          "cin": msg
        });
        break;

      case "email":
        if (value === "") msg = "requis";
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) msg = "adresse email incorrect";
        setErrors({ ...errors, "nom": msg });
        break;

      case "gsm":
        if (value === "") msg = "requis";
        else if (!/^[0-9]{1,8}$/.test(value)) msg = "GSM doit etre de 1 a 8 caract??res contenant des chiffres num??rique";
        setErrors({ ...errors, "gsm": msg });
        break;

      case "password":
        if (enseignantId === null) {
          if (value === "") {
            msg = "requis";
          } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value)) {
            msg = "Saisi un mot de passe de 8 ?? 15 caract??res contenant au moins une lettre minuscule, une lettre majuscule, un chiffre num??rique et un caract??re sp??cial";
          }
          setErrors({
            ...errors,
            "password": msg
          });
        }
        break;
    }
  }

  return (
    <Container>

      <Modal isOpen={isOpen} toggle={() => toggleConfirm(null)} size="md">
        <ModalHeader toggle={() => toggleConfirm(null, null, null)} style={{backgroundColor:"#FFCC00"}}>
          <div id="contained-modal-title-vcenter">
            <h1 style={{color:"black", fontSize:"28px", fontWeight:"35px"}}>Supprimer Enseignant</h1>
          </div>
        </ModalHeader>
        <ModalBody >
          <center><p>Voulez-vous supprimer l'enseignant <strong>{getEnseignantName()}</strong>?</p></center>
        </ModalBody>
        <ModalFooter>
          <Button
            color="info"
            className="mr-4"
            onClick={() => {
              deleteEnseignant();
              toggleConfirm(null);
            }}
          >
            <i className="fa fa-check" />{' '}
            Oui
          </Button>
          <Button
            color="secondary"
            onClick={() => toggleConfirm(null)}
          >
            <i className="fa fa-times" />{' '}
            Non
          </Button>
        </ModalFooter>
      </Modal>

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
                  name="matricule"
                  type="text" 
                  placeholder="Matricule" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setMatricule(e.target.value)} value={matricule}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  name="cin"
                  type="text" 
                  placeholder="CIN" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setCin(e.target.value)} value={cin}
                  onBlur={validateForm}
                />
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
                {errors && errors["cin"] !== "" && <div className="text-danger" style={{marginLeft:"25px"}}>{' '}{errors["cin"]}</div>}
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  name="nom"
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
                  name="prenom"
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
                  name="date_naissance"
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
                  name="adresse"
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
                  name="email"
                  type="text" 
                  placeholder="Email" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setEmail(e.target.value)} value={email}
                  onBlur={validateForm}
                />
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
                {errors && errors["email"] !== "" && <div className="text-danger" style={{marginLeft:"25px"}}>{' '}{errors["email"]}</div>}
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  name="password"
                  type="password" 
                  placeholder="Mot de passe" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setPassword(e.target.value)} value={password}
                  onBlur={validateForm}
                />
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
                {errors && errors["password"] !== "" && <div className="text-danger" style={{marginLeft:"25px"}}>{' '}{errors["password"]}</div>}
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  name="gsm"
                  type="text" 
                  placeholder="GSM" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setGsm(e.target.value)} value={gsm}
                  onBlur={validateForm}
                />
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
                {errors && errors["gsm"] !== "" && <div className="text-danger" style={{marginLeft:"25px"}}>{' '}{errors["gsm"]}</div>}
            </div>
            <h5 className="text-center mb-3">D??partements</h5>
            <Row>
              <Col>
                <i className="text-muted">Departements de l'enseignant</i>
                <ListGroup>
                  {
                    leftDeps && leftDeps.map((dep, idx) => {
                      return <ListGroupItem
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <span>{dep.nom} ({dep.libelle})</span>
                        <Button
                          onClick={() => suppDep(dep)}
                          size="sm"
                          style={{
                            height: "32px"
                          }}
                          color="danger"
                        >
                          <i className="fa fa-times" />
                        </Button>
                      </ListGroupItem>  
                    })
                  }
                </ListGroup>
              </Col>
              <Col>
                <i className="text-muted">Departements disponible</i>
                <ListGroup>
                  {
                    rightDeps && rightDeps.map((dep, idx) => {
                      return <ListGroupItem
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <span>{dep.nom} ({dep.libelle})</span>
                        <Button
                          onClick={() => addDep(dep)}
                          size="sm"
                          style={{
                            height: "32px"
                          }}
                          color="info"
                        >
                          <i className="fa fa-check" />
                        </Button>
                      </ListGroupItem>
                    })
                  }                
                </ListGroup>
              </Col>
            </Row>
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

      <Alert color="success" isOpen={visible} toggle={onDismiss} fade={false} className="mt-2">
        <i className="fa fa-check" />{' '}
        {alertMessage}
      </Alert>
      
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
            </tr>
          </thead>
          <tbody>
            {
              enseignants && enseignants
              .filter(item => {
                if (searchTerm)
                  return (item.nom.toLowerCase() + " " + item.prenom.toLowerCase()).includes(searchTerm.toLowerCase());
                else
                  return true;
              })
              .map((item)=>{
                return(
                  <tr>
                    <td>
                      <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}} onClick={() => toggle(item, "Modifier Enseignant", "Modifier")}></i>
                      <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={() => toggleConfirm(item._id)}></i>
                    </td>
                    <td>{item.matricule}</td>
                    <td>{item.cin}</td>
                    <td>{item.nom}</td>
                    <td>{item.prenom}</td>
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