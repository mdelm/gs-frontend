import React, { useEffect, useState } from 'react';
import axios from "axios";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import "./TableClasseStyle.css";
import classnames from "classnames";
import {
  Table,
  Modal, 
  ModalHeader, 
  ModalBody,
  Input,
  Row,
  Col,
  Button,
  Alert,
  ListGroup, 
  ListGroupItem,
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Card, 
  CardTitle, 
  CardText
} from "reactstrap";

const TableClasse = props => {
  const [ filieres, setFilieres ] = useState([]);
  const [ classes, setClasses ] = useState([]);
  const [ etudiants, setEtudiants ] = useState([]);
  const [ matieres, setMatieres ] = useState([]);

  const [ modal, setModal ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ activeTab, setActiveTab ] = useState('1');

  const [ classeId, setClasseId ] = useState(null);
  const [ modalTitle, setModalTitle ] = useState(null);
  const [ modalBtnText, setModalBtnText ] = useState(null);

  const [ nom, setNom ] = useState("");
  const [ filiere, setFiliere ] = useState(null);

  const [ leftMatieres, setLeftMatieres ] = useState([]);
  const [ rightMatieres, setRightMatieres ] = useState([]);

  const [ leftEtudiants, setLeftEtudiants ] = useState([]);
  const [ rightEtudiants, setRightEtudiants ] = useState([]);

  useEffect(() => {
    getAllFilieres();
    getAllMatiere();
    getAllEtudiant();
  }, []);

  useEffect(() => {
    getAllClasses();
  }, [filieres]);

  const getAllClasses = () => {
    axios.get('http://localhost:3000/classe/findClasse')
      .then(response => {
        setClasses(response.data.data.map(cls => ({
          ...cls,
          filliere: filieres.find(flr => flr._id === cls.filliere)
        })));
      });
  };

  const getAllFilieres = () => {
    axios.get('http://localhost:3000/filiere/findfiliere')
      .then(response => {
        setFilieres(response.data.data);
      });
  };

  const getAllMatiere = () => {
    axios.get('http://localhost:3000/matiere/findMatiere')
      .then(response => {
        setMatieres(response.data.data);
      });
  };

  const getAllEtudiant = () => {
    axios.get('http://localhost:3000/etudiants/findAllEtudiant')
      .then(response => {
        setEtudiants(response.data.data);
      });
  };

  const toggle = (_item, _title, _btn_text) => {
    setModal(!modal);
    setModalTitle(_title);
    setModalBtnText(_btn_text);

    setClasseId( _item !== null ? _item._id : null);
    setNom( _item !== null ? _item.nom_classe : "" );
    setFiliere( _item !== null ? _item.filliere : "");

    if (_item !== null) {
      setLeftMatieres(matieres.filter(mt => _item.matieres.includes(mt._id)));
      setRightMatieres(matieres.filter(mt => !_item.matieres.includes(mt._id)));

      setLeftEtudiants(etudiants.filter(etud => _item.etudiants.includes(etud._id)));
      setRightEtudiants(etudiants.filter(etud => !_item.etudiants.includes(etud._id)));
    } else {
      setLeftMatieres([]);
      setRightMatieres(matieres);

      setLeftEtudiants([]);
      setRightEtudiants(etudiants);
    }
  };

  const toggleTab = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const addClasse = () => {
    const data = { 
        nom_classe: nom,
        filliere: { _id: filiere._id },
        matieres: leftMatieres.map(mt => ({ _id: mt._id })),
        etudiants: leftEtudiants.map(etud => ({ _id: etud._id }))
    };
    console.log(data);
    axios.post('http://localhost:3000/classe/addClasse', data)
      .then(response => {
        getAllClasses();
        toggle(null, null, null);
      });
  };

  const updateClasse = () => {
    const data = { 
        nom_filiere: nom,
        filliere: { _id: filiere._id },
        matieres: leftMatieres.map(mt => ({ _id: mt._id })),
        etudiants: leftEtudiants.map(etud => ({ _id: etud._id }))
    };
    axios.put(`http://localhost:3000/classe/updateClasse/${classeId}`, data)
      .then(response => {
        getAllClasses();
        toggle(null, null, null);
      });
  };

  const deleteClasse = (_id) => {
    axios.delete(`http://localhost:3000/classe/classedeleteById/${_id}`)
      .then(response => {
        getAllClasses();
      });
  };

  const ajouterMatiere = mat => {
    setRightMatieres(rightMatieres.filter(mt => mt._id !== mat._id));
    setLeftMatieres([...leftMatieres, mat]);
  };

  const supprimerMatiere = mat => {
    setLeftMatieres(leftMatieres.filter(mt => mt._id !== mat._id));
    setRightMatieres([...rightMatieres, mat]);
  };

  const ajouterEtudiant = etud => {
    setRightEtudiants(rightEtudiants.filter(et => et._id !== etud._id));
    setLeftEtudiants([...leftEtudiants, etud]);
  };

  const supprimerEtudiant = etud => {
    setLeftEtudiants(leftEtudiants.filter(et => et._id !== etud._id));
    setRightEtudiants([...rightEtudiants, etud]);
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={() => toggle(null, null, null)} size="xl">
        <ModalHeader toggle={() => toggle(null, null, null)} style={{backgroundColor:"#FFCC00"}}>
          <div id="contained-modal-title-vcenter">
            <h1 style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>{modalTitle}</h1>
          </div>
        </ModalHeader>
        <ModalBody>     
          <form>
            <Row>
              <Col>
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
              </Col>
              <Col>
                <div class="group">
                  <label><i class="fa fa-user"></i> </label>
                  <select 
                    onChange={e => setFiliere(filieres.find(flr => flr._id === e.target.value))} 
                    value={filiere ? filiere._id : ""}
                    style={{marginLeft:"25px"}}
                  >
                    { filieres && filieres.map((flr, idx) => <option value={flr._id} key={idx}>{flr.nom_filiere}</option>) }
                  </select>
                  <span class="highlight"style={{marginLeft:"25px"}} />
                  <span class="bar" style={{marginLeft:"25px"}}></span>
                </div>
              </Col>
            </Row>
            <div>
              <Nav tabs>
                <NavItem style={{ cursor: "pointer" }}>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggleTab('1'); }}
                  >
                    <i className="fa fa-book"/> Matieres
                  </NavLink>
                </NavItem>
                <NavItem style={{ cursor: "pointer" }}>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggleTab('2'); }}
                  >
                    <i className="fa fa-users"/> Etudiants
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} style={{
                padding: "10px",
                backgroundColor: "#ffffff",
                border: "1px solid #DEE2E6",
                borderTop: "none"
              }}>
                <TabPane tabId="1">
                  <Row>
                    <Col>
                      <div>
                        <h5 style={{ color: "darkorange" }} className="m-2">Matieres de la classe</h5>
                        <ListGroup>
                          {
                            leftMatieres && leftMatieres.map((mat, idx) => <ListGroupItem key={idx} style={{ paddingRight: "60px"}}>
                                  {mat.nom}
                                  <Button  style={{ position: "absolute", right: "10px", top: "10px" }} color="danger" size="sm" outline onClick={() => supprimerMatiere(mat)}>
                                    Supp.
                                  </Button>
                                </ListGroupItem>
                              )
                          }
                        </ListGroup>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <h5 style={{ color: "darkorange" }} className="m-2">Matieres disposibles</h5>
                        <ListGroup>
                          {
                            rightMatieres && rightMatieres.map((mat, idx) => <ListGroupItem key={idx} style={{ paddingRight: "60px"}}>
                                  {mat.nom}
                                  <Button style={{ position: "absolute", right: "10px", top: "10px" }} color="success" size="sm" outline onClick={() => ajouterMatiere(mat)}>
                                    Ajou.
                                  </Button>
                                </ListGroupItem>
                              )
                          }
                        </ListGroup>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col>
                      <div>
                        <h5 style={{ color: "darkorange" }} className="m-2">Etudiants de la classe</h5>
                        <ListGroup>
                          {
                            leftEtudiants && leftEtudiants.map((etud, idx) => <ListGroupItem key={idx} style={{ paddingRight: "60px"}}>
                                  <span className="text-muted">{etud.matricule}</span> - {etud.nom} {etud.prenom}
                                  <Button  style={{ position: "absolute", right: "10px", top: "10px" }} color="danger" size="sm" outline onClick={() => supprimerEtudiant(etud)}>
                                    Supp.
                                  </Button>
                                </ListGroupItem>
                              )
                          }
                        </ListGroup>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <h5 style={{ color: "darkorange" }} className="m-2">Etudiants disposibles</h5>
                        <ListGroup>
                          {
                            rightEtudiants && rightEtudiants.map((etud, idx) => <ListGroupItem key={idx} style={{ paddingRight: "60px"}}>
                                  <span className="text-muted">{etud.matricule}</span> - {etud.nom} {etud.prenom}
                                  <Button style={{ position: "absolute", right: "10px", top: "10px" }} color="success" size="sm" outline onClick={() => ajouterEtudiant(etud)}>
                                    Ajou.
                                  </Button>
                                </ListGroupItem>
                              )
                          }
                        </ListGroup>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
            <button
              type="button" 
              class="button buttonBlue" 
              style={{color:"black"}}
              onClick={() => {
                if (classeId !== null)
                  updateClasse();
                else
                  addClasse();
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
          title="Classe"
          subTitle="gestion des classe"
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
              onClick={() => toggle(null, "Ajouter Classe", "Ajouter")}
            >
              <AddIcon /> Add New
            </Button>
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Nom de classe</th>
              <th scope="col">Filiere</th>
            </tr>
          </thead>
          <tbody>
            {
              classes && classes
              .filter(item => {
                if (searchTerm)
                  return item.nom_classe.toLowerCase().includes(searchTerm.toLowerCase());
                else
                  return true;
              })
              .map((item)=>{
                return(
                  <tr>
                    <td>
                      <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}} onClick={() => toggle(item, "Modifier Classe", "Modifier")}></i>
                      <i class=' fa fa-trash fa-lg mt-8 ' style={{color:"black"}} onClick={() => deleteClasse(item._id)}></i>
                    </td>
                    <td>{item.nom_classe}</td>
                    <td>{item.filliere && item.filliere.nom_filiere}</td>
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

export default TableClasse;