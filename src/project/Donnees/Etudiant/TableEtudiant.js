import React, { useEffect, useState } from 'react';
import axios from "axios"
import etudiantController from '../../services/Controllers/etudiantController';
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Controls from "../../components/controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import "./TableEtudiantStyle.css";
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
  Alert
} from "reactstrap";
import { format } from "date-fns";

const TableEtudiant = props => {
  const [ etudiants, setEtudiants ] = useState([]);

  const [ modal, setModal ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);

  const [ etudToDelete, setEtudToDelete ] = useState(null);

  const [ etudiantId, setEtudiantId ] = useState(null);
  const [ modalTitle, setModalTitle ] = useState(null);
  const [ modalBtnText, setModalBtnText ] = useState(null);

  const [ matricule, setMatricule ] = useState("");
  const [ cin, setCin ] = useState("");
  const [ nom, setNom ] = useState("");
  const [ prenom, setPrenom ] = useState("");
  const [ civilite, setCivilite ] = useState("");
  const [ dateNaissance, setDateNassance ] = useState("");
  const [ lieuNaissance, setLieuNassance ] = useState("");
  const [ adresse, setAdresse ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ bac, setBac ] = useState("");
  const [ mention, setMention ] = useState("");
  const [ gsm, setGsm ] = useState("");
  const [ annee, setAnnee ] = useState("");
  const [ emailParent, setEmailParent ] = useState("");

  const [ searchTerm, setSearchTerm ] = useState("");

  const [ errors, setErrors ] = useState({});

  const [ alertMessage, setAlertMessage ] = useState("");
  const [ visible, setVisible ] = useState(false);

  const onDismiss = () => setVisible(false);

  useEffect(() => {
    getAllEtudiant();
  }, []);

  const getAllEtudiant = () => {
    axios.get('http://localhost:3000/etudiants/findAllEtudiant')
      .then(response => {
        setEtudiants(response.data.data);
      });
  };

  const toggle = (_item, _title, _btn_text) => {
    if (modal === true) setErrors({});

    setModal(!modal);
    setModalTitle(_title);
    setModalBtnText(_btn_text);

    console.log(_item);

    setEtudiantId( _item !== null ? _item._id : null);
    setMatricule( _item !== null ? _item.matricule : "");
    setCin( _item !== null ? _item.cin : "");
    setNom( _item !== null ? _item.nom : "" );
    setPrenom( _item !== null ? _item.prenom : "");
    setCivilite( _item !== null ? _item.civilite : "");
    setDateNassance( _item !== null ? format(new Date(_item.date_naissance), "yyyy-MM-dd") : "");
    setLieuNassance( _item !== null ? _item.lieu_naissance : "");
    setAdresse( _item !== null ? _item.adresse : "" );
    setEmail( _item !== null ? _item.email : "" );
    setBac( _item !== null ? _item.Baccalaureat : "");
    setMention( _item !== null ? _item.mention : "" );
    setGsm( _item !== null ? _item.gsm : "");
    setAnnee( _item !== null ? _item.annee : "");
    setEmailParent( _item !== null ? _item.emailParent : "");
    setPassword("");
  };

  const toggleConfirm = (_id) => {
    if (_id !== null && isOpen === false) {
      setEtudToDelete(_id);
    } else {
      setEtudToDelete(null);
    }

    setIsOpen(!isOpen);
  };

  const addEtudiant = () => {
    const data = { 
        matricule,
        cin,
        nom,
        prenom,
        civilite,
        date_naissance: dateNaissance,
        lieu_naissance: lieuNaissance,
        adresse: adresse,
        email,
        password,
        Baccalaureat: bac, 
        mention,
        gsm,
        annee,
        emailParent
    };
    axios.post('http://localhost:3000/etudiants/addEtudiant', data)
      .then(response => {
        getAllEtudiant()
        toggle(null, null, null);
      });
      setAlertMessage("Etudiant ajouter avec succées");
      setVisible(true);
  };

  const updateEtudiant = () => {
    const data = { 
        matricule,
        cin,
        nom,
        prenom,
        civilite,
        date_naissance: dateNaissance,
        lieu_naissance: lieuNaissance,
        adresse: adresse,
        email,
        Baccalaureat: bac, 
        mention,
        gsm,
        annee,
        emailParent
    };
    axios.put(`http://localhost:3000/etudiants/updateEtudiantById/${etudiantId}`, data)
      .then(response => {
        getAllEtudiant();
        toggle(null, null, null);
        setAlertMessage("Etudiant modifier avec succées");
        setVisible(true);
      });
  };

  const deleteEtudiant = () => {
    axios.delete(`http://localhost:3000/etudiants/deleteOneEtudiant/${etudToDelete}`)
      .then(response => {
        getAllEtudiant();
        setAlertMessage("Etudiant supprimer avec succées");
        setVisible(true)
      });
  };

  const getEtudiantName = () => {
    if (etudToDelete !== null) {
      const etud = etudiants.find(e => e._id === etudToDelete);
      return `${etud.nom} ${etud.prenom}`;
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
          msg = "CIN doit etre de 8 caractères contenant des chiffres numérique";
        }
        setErrors({
          ...errors,
          "cin": msg
        });
        break;

      case "email":
        if (value === "") msg = "requis";
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) msg = "adresse email incorrect. (username@example.com)";
        setErrors({ ...errors, "email": msg });
        break;

      case "gsm":
        if (value === "") msg = "requis";
        else if (!/^[0-9]{1,8}$/.test(value)) msg = "GSM doit etre de 1 a 8 caractères contenant des chiffres numérique";
        setErrors({ ...errors, "gsm": msg });
        break;

      case "password":
        if (etudiantId === null) {
          if (value === "") {
            msg = "requis";
          } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value)) {
            msg = "Saisi un mot de passe de 8 à 15 caractères contenant au moins une lettre minuscule, une lettre majuscule, un chiffre numérique et un caractère spécial";
          }
          setErrors({
            ...errors,
            "password": msg
          });
        }
        break;

      case "email_parent":
        if (value === "") msg = "requis";
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) msg = "adresse email incorrect";
        setErrors({ ...errors, "email_parent": msg });
        break;

      case "annee":
        if (value === "") msg = "requis";
        else if (!/^[0-9]{4}$/.test(value)) msg = "annee incorrect. (example: 2021)";
        setErrors({ ...errors, "annee": msg });
        break;
    }
  }

  return (
    <div>

      <Modal isOpen={isOpen} toggle={() => toggleConfirm(null)} size="md">
        <ModalHeader toggle={() => toggleConfirm(null, null, null)} style={{backgroundColor:"#FFCC00"}}>
          <div id="contained-modal-title-vcenter">
            <h1 style={{color:"black", fontSize:"28px", fontWeight:"35px"}}>Supprimer Etudiant</h1>
          </div>
        </ModalHeader>
        <ModalBody >
          <center>Voulez-vous supprimer l'etudiant <strong>{getEtudiantName()}</strong>?</center>
        </ModalBody>
        <ModalFooter>
          <Button
            color="info"
            className="mr-4"
            onClick={() => {
              deleteEtudiant();
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
                  type="text"
                  name="prenom" 
                  placeholder="Prenom" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setPrenom(e.target.value)} value={prenom}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="text" 
                  placeholder="Civilite" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setCivilite(e.target.value)} value={civilite}/>
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
                  placeholder="Lieu de naissance" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setLieuNassance(e.target.value)} value={lieuNaissance}/>
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
                  type="text" 
                  placeholder="Baccalaureat" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setBac(e.target.value)} value={bac}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  type="text" 
                  placeholder="Mention" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setMention(e.target.value)} value={mention}/>
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
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
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  name="annee"
                  type="text" 
                  placeholder="Annee" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setAnnee(e.target.value)} value={annee}
                  onBlur={validateForm}
                />
                {errors && errors["annee"] !== "" && <div className="text-danger" style={{marginLeft:"25px"}}>{' '}{errors["annee"]}</div>}
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
            </div>
            <div class="group">
                <label><i class="fa fa-user"></i> </label>
                <input 
                  name="email_parent"
                  type="text" 
                  placeholder="Email Parent" 
                  style={{marginLeft:"25px"}}
                  onChange={e => setEmailParent(e.target.value)} value={emailParent}
                  onBlur={validateForm}
                />
                <span class="highlight"style={{marginLeft:"25px"}} />
                <span class="bar" style={{marginLeft:"25px"}}></span>
                {errors && errors["eamil_parent"] !== "" && <div className="text-danger" style={{marginLeft:"25px"}}>{' '}{errors["email_parent"]}</div>}
            </div>
            <button
              type="button" 
              class="button buttonBlue" 
              style={{color:"black"}}
              onClick={() => {
                if (etudiantId !== null)
                  updateEtudiant();
                else
                  addEtudiant();
              }}
            >
              {modalBtnText}
              <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
            </button>
          </form>
        </ModalBody>
      </Modal>

      <Alert color="success" isOpen={visible} toggle={onDismiss} fade={false} className="mt-2">
        <i className="fa fa-check" />{' '}
        {alertMessage}
      </Alert>

      <div> 
        <PageHeader
          title="Etudiant"
          subTitle="gestion des etudiants"
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
              onClick={() => toggle(null, "Ajouter Etudiant", "Ajouter")}
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
              etudiants && etudiants
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
                      <i class=' fa fa-edit fa-lg mt-8 ' style={{color:"green"}} onClick={() => toggle(item, "Modifier Etudiant", "Modifier")}></i>
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
    </div>
  );
};

export default TableEtudiant;