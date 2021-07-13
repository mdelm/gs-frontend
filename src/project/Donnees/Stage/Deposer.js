import React, { useState, useEffect } from "react";
import { Input, Row, Col, Alert, Button } from "reactstrap";
import  userController from '../../../project/services/Controllers/userController';
import "./DeposerStyle.css";

/*
harrabi mokhtar
bassma bn salah
yassin kachoukh
*/

const Deposer = (props) => {

	const [ user, setUser ] = useState(null);

	useEffect(() => {
		getOneUser();
	}, []);

	const getOneUser = () => {
		const userCtrl = new userController();
		userCtrl.getoneUserById(localStorage.getItem('iduser')).then(response=>{
      console.log('response from get one user by id', response);
      setUser(response.data.data);
    })
	};

	return (
		<>
			{
				user === null
				? 
				<div>loading...</div>
				:
				<>
					<div className="deposer">
						<Alert color="warning">
							Attention, le dépot en ligne ne peut etre fait qu'une seule fois ! Vérifier les donnée avent de les soumettre.
						</Alert>
						<h3 className="section-title">Informations relative au stage</h3>
						<br/>
						<label htmlFor="" className="label-required">Sujet ou poste</label>
						<Input type="text"/>
						<br/>
						<label htmlFor="">Description</label>
						<Input type="textarea"/>
						<br/>
						<Row>
							<Col lg="3"><label htmlFor="" className="">Prénom et Nom du Binome</label></Col>
							<Col>
								<Input type="select">
									<option value="">0 élement(s) sélectionné(s)</option>
									<option value="">binome 1</option>
									<option value="">binome 2</option>
									<option value="">binome 3</option>
								</Input>
							</Col>
						</Row>
						<br/>
						<Row>
							<Col lg="3"><label htmlFor="" className="label-required">Date de début</label></Col>
							<Col><Input type="date" /></Col>
						</Row>
						<br/>
						<Row>
							<Col lg="3"><label htmlFor="" className="label-required">Date de fin</label></Col>
							<Col><Input type="date" /></Col>
						</Row>
						<br/>
						<br/>
						<h3 className="section-title">Informations sur l'entreprise d'accueil</h3>
						<label htmlFor="" className="label-required">Node de l'entreprise</label>
						<Input type="text"/>
						<br/>
						<label htmlFor="" className="label-required">Adresse</label>
						<Input type="text"/>
						<br/>
						<label htmlFor="" className="label-required">Fax</label>
						<Input type="text"/>
						<br/>
						<label htmlFor="" className="label-required">Téléphone</label>
						<Input type="text"/>
						<br/>
						<label htmlFor="" className="label-required">Email entreprise</label>
						<Input type="text"/>
						<br/>
						<label htmlFor="" className="label-required">Encadrant professionnel</label>
						<Input type="text"/>
						<br/>
						<label htmlFor="" className="label-required">Email de l'encadrant professionnel</label>
						<Input type="text"/>
						<br/>
						<Row>
							<Col lg="3"><label htmlFor="" className="">Encadrant Universitaire principale</label></Col>
							<Col>
								<Input type="select">
									<option value="">encadrant 1</option>
									<option value="">encadrant 1</option>
									<option value="">encadrant 1</option>
								</Input>
							</Col>
						</Row>
						<br/>
						<Row>
							<Col lg="3"><label htmlFor="" className="">Co-encadreur</label></Col>
							<Col>
								<Input type="select">
									<option value="">0 élement(s) sélectionné(s)</option>
									<option value="">co-encadrant 1</option>
									<option value="">co-encadrant 1</option>
									<option value="">co-encadrant 1</option>
								</Input>
							</Col>
						</Row>

						<Button className="mt-4">Envoyer</Button>
					</div>
				</>
			}
		</>
	);
};

export default Deposer;