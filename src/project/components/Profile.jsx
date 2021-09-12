import React, { useState, useEffect } from 'react';
import './Profile.css'
import  userController from '../services/Controllers/userController'
import axios from 'axios';
import { 
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Card, 
  Button, 
  CardTitle, 
  CardText,
  CardBody, 
  Row, 
  Col,
  Container,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Input, 
  Label,
} from 'reactstrap';
import classnames from 'classnames';
import { format } from "date-fns";

const Profile = (props) => {
  const [ user, setUser ] = useState(null);
  const [ activeTab, setActiveTab ] = useState('1');
  const [ modal, setModal ] = useState(false);

  const [ isOpen, setIsOpen ] = useState(false);

  const [ nom, setNom ] = useState("");
  const [ prenom, setPrenom ] = useState("");
  const [ dateNaissance, setDateNaissance] = useState("");
  const [ lieuNaissance, setLieuNaissance ] = useState("");
  const [ adresse, setAdresse ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ gsm, setGsm ] = useState("");
  const [ emailParent, setEmailParent ] = useState("");

  const [ newPassword, setNewPassword ] = useState("");

  const [ errors, setErrors ] = useState({});

  const getOneUser = () => {
    const userCtrl = new userController();
    userCtrl.getoneUserById(localStorage.getItem('iduser'))
      .then(response=>{
        const usr = response.data.data;
        setUser(usr);

        setNom(usr.nom);
        setPrenom(usr.prenom);
        setDateNaissance(format(new Date(usr.date_naissance), "yyyy-MM-dd"));
        setLieuNaissance(usr.lieu_naissance);
        setAdresse(usr.adresse);
        setEmail(usr.email);
        setGsm(usr.gsm);
        setEmailParent(usr.emailParent);
      });
  };

  const toggleTab = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const toggle = () => {
    setModal(!modal);
  };

  const toggleOpen = () => {
    if (isOpen === true) {
      setNewPassword("");
      setErrors({...errors, "new-password": ""});
    } 
    setIsOpen(!isOpen);
  }

  const handleSubmit = () => {
    const usr = {
      _id: user._id,
      nom: nom,
      prenom: prenom,
      date_naissance: dateNaissance,
      lieu_naissance: lieuNaissance,
      adresse: adresse,
      email: email,
      gsm: gsm,
      emailParent: emailParent
    };

    axios.put(`http://localhost:3000/userrr/v2/updateUser`, usr)
      .then(response => {
        getOneUser();
      });
  };

  useEffect(() => {
    getOneUser();
  }, []);

  const handleChangePasswordSubmit = () => {
    if (newPassword !== "") {
      axios.put(`http://localhost:3000/userrr/changepassword`, { _id: user._id, password: newPassword })
        .then(res => {
          setNewPassword("");
        });
    }
  };

  const validateForm = (e) => {
    const { name, value } = e.target;
    let msg = "";

    switch (name) {

      case "new-password":
        if (value === "") {
          msg = "requis";
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value)) {
          msg = "Saisi un mot de passe de 8 à 15 caractères contenant au moins une lettre minuscule, une lettre majuscule, un chiffre numérique et un caractère spécial";
        }
        setErrors({
          ...errors,
          [name]: msg
        });
        break;

      case "nom":
        if (value === "") msg = "requis";
        setErrors({ ...errors, "nom": msg });
        break;

      case "prenom":
        if (value === "") msg = "requis";
        setErrors({ ...errors, "prenom": msg });
        break;

      case "date_naissance":
        if (value === "") msg = "requis";
        setErrors({ ...errors, "date_naissance": msg });
        break;

      case "lieu_naissance":
        if (value === "") msg = "requis";
        setErrors({ ...errors, "lieu_naissance": msg });
        break;

      case "adresse":
        if (value === "") msg = "requis";
        setErrors({ ...errors, "adresse": msg });
        break;

      case "email":
        if (value === "") msg = "requis";
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) msg = "adresse email incorrect";
        setErrors({ ...errors, "nom": msg });
        break;

      case "gsm":
        if (value === "") msg = "requis";
        else if (!/^[0-9]{1,8}$/.test(value)) msg = "GSM incorrect";
        setErrors({ ...errors, "gsm": msg });
        break;

      case "email_parent":
        if (value === "") msg = "requis";
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) msg = "adresse email incorrect";
        setErrors({ ...errors, "email_parent": msg });
        break;
    }
  };

  return (
    <>
    {
      user === null
      ?
      <p>... loading</p>
      :
      <Container className="mt-4">

        <Modal isOpen={isOpen} toggle={toggleOpen} size="md">
          <ModalHeader>Modifier le Mot de Passe</ModalHeader>
          <ModalBody>
            <label htmlFor="nom" className="label-required">Nouveau Mot de Passe: </label>
            <Input 
              type="text" 
              name="new-password"  
              onBlur={validateForm}
              onChange={(e) => setNewPassword(e.target.value)} 
              value={newPassword}
            />
            {errors && errors["new-password"] !== "" && <div className="text-danger">{' '}{errors["new-password"]}</div>}
          </ModalBody>
          <ModalFooter>
            <Button 
              color="success"
              onClick={() => {
                handleChangePasswordSubmit();
                toggleOpen();
              }}
            >
              <i className="fa fa-save" /> Save
            </Button>{' '}
            <Button color="danger" onClick={toggleOpen}>
              <i className="fa fa-times" /> Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modifier les informations</ModalHeader>
          <ModalBody>
            <label htmlFor="nom" className="label-required">Nom</label>
            <Input type="text" name="nom" onBlur={validateForm} onChange={(e) => setNom(e.target.value)} value={nom}/>
            {errors && errors["nom"] !== "" && <div className="text-danger">{' '}{errors["nom"]}</div>}
            <br/>
            <label htmlFor="prenom" className="label-required">Prenom</label>
            <Input type="text" name="prenom" onBlur={validateForm} onChange={(e) => setPrenom(e.target.value)} value={prenom}/>
            {errors && errors["prenom"] !== "" && <div className="text-danger">{' '}{errors["prenom"]}</div>}
            <br/>
            <label htmlFor="date_naissance" className="label-required">Date de naissance</label>
            <Input type="date" name="date_naissance" onBlur={validateForm} onChange={(e) => setDateNaissance(e.target.value)} value={dateNaissance}/>
            {errors && errors["date_naissance"] !== "" && <div className="text-danger">{' '}{errors["date_naissance"]}</div>}
            <br/>
            <label htmlFor="lieu_naissance" className="label-required">Lieu de naissance</label>
            <Input type="text" name="lieu_naissance" onBlur={validateForm} onChange={(e) => setLieuNaissance(e.target.value)} value={lieuNaissance}/>
            {errors && errors["lieu_naissance"] !== "" && <div className="text-danger">{' '}{errors["lieu_naissance"]}</div>}
            <br/>
            <label htmlFor="adresse" className="label-required">Adresse</label>
            <Input type="text" name="adresse" onBlur={validateForm} onChange={(e) => setAdresse(e.target.value)} value={adresse}/>
            {errors && errors["adresse"] !== "" && <div className="text-danger">{' '}{errors["adresse"]}</div>}
            <br/>
            <label htmlFor="email" className="label-required">Email</label>
            <Input type="text" name="email" onBlur={validateForm} onChange={(e) => setEmail(e.target.value)} value={email}/>
            {errors && errors["email"] !== "" && <div className="text-danger">{' '}{errors["email"]}</div>}
            <br/>
            <label htmlFor="gsm" className="label-required">GSM</label>
            <Input type="text" name="gsm" onBlur={validateForm} onChange={(e) => setGsm(e.target.value)} value={gsm} />
            {errors && errors["gsm"] !== "" && <div className="text-danger">{' '}{errors["gsm"]}</div>}
            <br/>
            <label htmlFor="email_parent" className="label-required">Email parent</label>
            <Input type="text" name="email_parent" onBlur={validateForm} onChange={(e) => setEmailParent(e.target.value)} value={emailParent} />
            {errors && errors["email_parent"] !== "" && <div className="text-danger">{' '}{errors["email_parent"]}</div>}
            <br/>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="success"
              onClick={() => {
                handleSubmit();
                toggle();
              }}
            >
              <i className="fa fa-save" /> Save
            </Button>{' '}
            <Button color="danger" onClick={toggle}>
              <i className="fa fa-times" /> Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { toggleTab('1'); }}
                    >
                      Informations Personnels
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { toggleTab('2'); }}
                    >
                      .
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1" className="p-4">
                    <Row>
                      <Col sm="3" md="2">
                        <label style={{fontWeight: 'bold'}}>Nom</label>
                      </Col>
                      <Col md="8" lg="6">
                        {user.nom}   
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col sm="3" md="2">
                        <label style={{fontWeight: 'bold'}}>Prenom</label>
                      </Col>
                      <Col md="8" lg="6">
                        {user.prenom}
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col sm="3" md="2">
                        <label style={{fontWeight: 'bold'}}>Date de naissance</label>
                      </Col>
                      <Col md="8" lg="6">
                        {format(new Date(user.date_naissance), "dd-MM-yyyy")}
                      </Col>
                    </Row>
                    <Button color="info" className="mt-4 mr-2" onClick={toggle}>
                      <i className="fa fa-edit mr-1"/> Modifier les informations
                    </Button>
                    <Button color="info" className="mt-4" onClick={toggleOpen}>
                      <i className="fa fa-lock mr-1"/> Modifier le Mot de Passe
                    </Button>
                  </TabPane>
                  {/*<TabPane tabId="2">
                    <Row>
                      <Col sm="6">
                        <Card body>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                      <Col sm="6">
                        <Card body>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>*/}
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    }
    </>
  );
};

export default Profile;