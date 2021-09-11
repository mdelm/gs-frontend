import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  userController from '../../../project/services/Controllers/userController';
import {
  Input,
  Button,
  Container,
  FormGroup,
  Label,
  Row, 
  Col
} from "reactstrap";
import { format } from "date-fns";

const DemandeAttestation = (props) => {
  const [ nom, setNom ] = useState("");
  const [ prenom, setPrenom ] = useState("");
  const [ date, setDate ] = useState("");
  const [ specialite, setSpecialite ] = useState("");
  const [ raison, setRaison ] = useState("");
  const [ departement, setDepartement ] = useState(null);
  const [ ancadreur, setAncadreur ] = useState(null);

  const [ enseignants, setEnseignants ] = useState([]);
  const [ departements, setDepartements ] = useState([]);
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    getOneUser();
    fetchEnseignants();
    fetchDepartements();
  }, []);

  useEffect(() => {
    if (user !== null) {
      setNom(user.nom);
      setPrenom(user.prenom);
      setDate(format(new Date(user.date_naissance), "yyyy-MM-dd"));
    }
  }, [user]);

  const getOneUser = () => {
    const userCtrl = new userController();
    userCtrl.getoneUserById(localStorage.getItem('iduser')).then(response=>{
      console.log('response from get one user by id', response);
      setUser(response.data.data);
    })
  };

  const fetchEnseignants = () => {
    axios.get("http://localhost:3000/enseignant/findEnseignent")
      .then(res => {
        setEnseignants(res.data.data);
      });
  }

  const fetchDepartements = () => {
    axios.get("http://localhost:3000/departements/findAllDepartement")
      .then(res => {
        setDepartements(res.data.data);
      });
  };

  const handleDemandeAttestation = () => {
    const data = {
      etudiant: user._id,
      departement: departement._id,
      ancadreur: ancadreur._id,
      chef_departement: departement.responsableDepartement,
      raison,
      specialite,
      date,
    };
    axios.post("http://localhost:3000/attestation/demande", data)
      .then(res => {
        console.log(res.data.message);
      });
  };

  return (
    <Container className="mt-4">
      <h2> Attestation de présence</h2>
      <Row>
        <Col>
          <FormGroup>
            <Label>Nom : </Label>
            <Input type="text" onChange={(e) => setNom(e.target.value)} value={nom} disabled />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Prenom : </Label>
            <Input type="text" onChange={(e) => setPrenom(e.target.value)} value={prenom} disabled />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label>Date : </Label>
        <Input type="date" onChange={(e) => setDate(e.target.value)} value={date} disabled />
      </FormGroup>
      {/*<FormGroup>
        <Label>Date : </Label>
        <Input type="date" id="date2" value="2021-09-14" />
      </FormGroup>*/}
      <FormGroup>
        <Label>Specialite : </Label>
        <Input type="text" onChange={(e) => setSpecialite(e.target.value)} value={specialite} />
      </FormGroup>
      <FormGroup>
        <Label>Raison : </Label>
        <Input type="textarea" onChange={(e) => setRaison(e.target.value)} value={raison} />
      </FormGroup>
      <Row>
        <Col>
          <FormGroup>
            <Label>Departement : </Label>
            <Input 
              type="select"
              onChange={ (e) => setDepartement(departements.find(dep => dep._id === e.target.value)) }
              value={departement ? departement._id : ""}
            >
              <option value={null}>----</option>
              {
                departements && departements.map((dep, idx) => <option value={dep._id} key={idx}>{dep.nom} ({dep.libelle})</option>)
              }
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Ancadreur : </Label>
            <Input 
              type="select"
              onChange={ (e) => setAncadreur(enseignants.find(ensei => ensei._id === e.target.value)) }
              value={ancadreur ? ancadreur._id : ""}
            >
              <option value={null}>----</option>
              {
                enseignants && enseignants
                  .filter(ensei => {
                    if (departement) {
                      return ensei.departements.includes(departement._id);
                    } else {
                      return false;
                    }
                  })
                  .map((ensei, idx) => <option value={ensei._id} key={idx}>{ensei.nom} {ensei.prenom}</option>)
              }
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <br/>
      <Button color="info" onClick={handleDemandeAttestation}>
        Demander l'attestation
      </Button>
    </Container>
  );
};

export default DemandeAttestation;