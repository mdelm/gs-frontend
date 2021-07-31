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

const Profile = (props) => {
  const [ user, setUser ] = useState(null);
  const [ activeTab, setActiveTab ] = useState('1');
  const [ modal, setModal ] = useState(false);

  const [ nom, setNom ] = useState("");
  const [ prenom, setPrenom ] = useState("");
  const [ dateNaissance, setDateNaissance] = useState("");
  const [ lieuNaissance, setLieuNaissance ] = useState("");
  const [ adresse, setAdresse ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ gsm, setGsm ] = useState("");
  const [ emailParent, setEmailParent ] = useState("");

  const getOneUser = () => {
    const userCtrl = new userController();
    userCtrl.getoneUserById(localStorage.getItem('iduser'))
      .then(response=>{
        const usr = response.data.data;
        setUser(usr);

        setNom(usr.nom);
        setPrenom(usr.prenom);
        setDateNaissance(usr.date_naissance);
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

  return (
    <>
    {
      user === null
      ?
      <p>... loading</p>
      :
      <Container className="mt-4">
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modifier les informations</ModalHeader>
          <ModalBody>
            <label htmlFor="nom" className="label-required">Nom</label>
            <Input type="text" name="nom" className="mb-4" onChange={(e) => setNom(e.target.value)} value={nom}/>
            <label htmlFor="prenom" className="label-required">Prenom</label>
            <Input type="text" name="prenom" className="mb-4" onChange={(e) => setPrenom(e.target.value)} value={prenom}/>
            <label htmlFor="date_naissance" className="label-required">Date de naissance</label>
            <Input type="date" name="date_naissance" className="mb-4" onChange={(e) => setDateNaissance(e.target.value)} value={dateNaissance}/>
            <label htmlFor="lieu_naissance" className="label-required">Lieu de naissance</label>
            <Input type="text" name="lieu_naissance" className="mb-4" onChange={(e) => setLieuNaissance(e.target.value)} value={lieuNaissance}/>
            <label htmlFor="adresse" className="label-required">Adresse</label>
            <Input type="text" name="adresse" className="mb-4" onChange={(e) => setAdresse(e.target.value)} value={adresse}/>
            <label htmlFor="email" className="label-required">Email</label>
            <Input type="text" name="email" className="mb-4" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <label htmlFor="gsm" className="label-required">GSM</label>
            <Input type="text" name="gsm" className="mb-4" onChange={(e) => setGsm(e.target.value)} value={gsm} />
            <label htmlFor="email_parent" className="label-required">Email parent</label>
            <Input type="text" name="email_parent" className="mb-4" onChange={(e) => setEmailParent(e.target.value)} value={emailParent} />
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
                      Basic Info
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { toggleTab('2'); }}
                    >
                      More Tabs
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
                        {(new Date(user.date_naissance)).toDateString()}
                      </Col>
                    </Row>
                    <Button color="info" className="mt-4" onClick={toggle}>
                      <i className="fa fa-edit mr-1"/> Modifier les informations
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