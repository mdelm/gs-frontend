import React, { useState, useEffect } from "react";
import { Input, Row, Col, Alert, Button } from "reactstrap";
import  userController from '../../../project/services/Controllers/userController';
import "./DeposerStyle.css";
import axios from "axios";
import CheckIcon from '@material-ui/icons/Check';

const Deposer = (props) => {

	const [ user, setUser ] = useState(null);
	const [ classe, setClasse ] = useState(null);
	const [ etudiants, setEtudiants ] = useState([]);
	const [ enseignants, setEnseignants ] = useState([]);

	const [ sujet, setSujet ] = useState("");
	const [ description, setDescription ] = useState("");
	const [ binome, setBinome ] = useState([]);
	const [ dateDebut, setDateDebut ] = useState("");
	const [ dateFin, setDateFin ] = useState("");
	const [ nomEntreprise, setNomEntreprise ] = useState("");
	const [ adresseEntreprise, setAdresseEntreprise ] = useState("");
	const [ faxEntreprise, setFaxEntreprise ] = useState("");
	const [ telephoneEntreprise, setTelephoneEntreprise ] = useState("");
	const [ emailEntreprise, setEmailEntreprise ] = useState("");
	const [ encadrantProfessionnel, setEncadrantProfessionnel ] = useState("");
	const [ emailEncadrantProfessionnel, setEmailEncadrantProfessionnel ] = useState("");
	const [ encadrantUniversitairePrincipale, setEncadrantUniversitairePrincipale ] = useState("");
	const [ coEncadrant, setCoEncadrant ] = useState([]);

	useEffect(() => {
		getOneUser();
		fetchEnseignants();
	}, []);

	useEffect(() => {
		if (user !== null) fetchClasse();
	}, [user]);

	useEffect(() => {
		if (classe !== null) fetchEtudiants();
	}, [classe]);

	const fetchClasse = () => {
		axios.get(`http://localhost:3000/classe/findClasseByEtudiant/${user._id}`)
			.then(response => {
				setClasse(response.data.data);
			});
	};

	const fetchEtudiants = () => {
		axios.get(`http://localhost:3000/classe/${classe.nom_classe}/etudiants`)
			.then(response => {
				setEtudiants(response.data.data);
			});
	};

	const fetchEnseignants = () => {
		axios.get(`http://localhost:3000/enseignant/findEnseignent`)
			.then(response => {
				setEnseignants(response.data.data);
			});
	};

	const getOneUser = () => {
		const userCtrl = new userController();
		userCtrl.getoneUserById(localStorage.getItem('iduser')).then(response=>{
      console.log('response from get one user by id', response);
      setUser(response.data.data);
    })
	};

	const handleBinomeChange = (val) => {
		if (val !== "info") {
			if (!binome.includes(val) && binome.length < 2) {
				setBinome([...binome, val]);
			}
		}
	};

	const handleCoEncadrantChange = (val) => {
		if (val !== "info") {
			if (!coEncadrant.includes(val) && coEncadrant.length < 4) {
				setCoEncadrant([...coEncadrant, val]);
			}
		}
	};

	const getSelectedCoEncadrant = () => {
		let str = "";
		for(let i = 0; i < coEncadrant.length; i++) {
			let enseignant = enseignants.find(ensei => ensei._id === coEncadrant[i]);
			str += `[${i+1}] ${enseignant.nom} ${enseignant.prenom}`;
			if (i !== coEncadrant.length - 1)
				str += ", "
		}
		str += "";
		return str;
	};

	const getSelectedBinome = () => {
		let str = "";
		for(let i = 0; i < binome.length; i++) {
			let etudiant = etudiants.find(etud => etud._id === binome[i]);
			str += `[${i+1}] ${etudiant.nom} ${etudiant.prenom}`;
			if (i !== binome.length - 1)
				str += ", "
		}
		str += "";
		return str;
	};

	const handleSubmit = () => {
		const stage = {
			sujet: sujet,
			description: description,
			binome: binome.map(etudId => ({ _id: etudId })),
			date_debut: dateDebut,
			date_fin: dateFin,
			nom_entreprise: nomEntreprise,
			adresse_entreprise: adresseEntreprise,
			fax_entreprise: faxEntreprise,
			telephone_entreprise: telephoneEntreprise,
			email_entreprise: emailEntreprise,
			encadrant_professionnel: encadrantProfessionnel,
			email_encadrant_professionnel: emailEncadrantProfessionnel,
			encadrant_universitaire_principale: encadrantUniversitairePrincipale,
			co_encadreur: coEncadrant.map(enseiId => ({ _id: enseiId }))
		};
		axios.post(`http://localhost:3000/stages/createStage`, stage)
			.then(response => {
				console.log(response.data.message);
				props.history.push(`/stages`);
			});
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
						<Input type="text" onChange={(e) => setSujet(e.target.value)} value={sujet} />
						<br/>
						<label htmlFor="">Description</label>
						<Input type="textarea" onChange={(e) => setDescription(e.target.value)} value={description} />
						<br/>
						<Row>
							<Col lg="3"><label htmlFor="" className="">Prénom et Nom du Binome</label></Col>
							<Col lg="8">
								<Input type="select" onChange={(e) => handleBinomeChange(e.target.value)} value="info">
									<option value="info" style={{ fontWeight: "bold" }}>
										{
											binome.length === 0
											?
											"0 élement(s) sélectionné(s)"
											:
											getSelectedBinome()
										}
									</option>
									{ etudiants && etudiants.map(etudiant => <option value={etudiant._id}>{`${etudiant.nom} ${etudiant.prenom}`}</option>) }
								</Input>
							</Col>
							<Col>
								<Button color="info" block onClick={() => setBinome([])}>Clear</Button>
							</Col>
						</Row>
						<br/>
						<Row>
							<Col lg="3"><label htmlFor="" className="label-required">Date de début</label></Col>
							<Col><Input type="date" onChange={(e) => setDateDebut(e.target.value)} value={dateDebut} /></Col>
						</Row>
						<br/>
						<Row>
							<Col lg="3"><label htmlFor="" className="label-required">Date de fin</label></Col>
							<Col><Input type="date" onChange={(e) => setDateFin(e.target.value)} value={dateFin} /></Col>
						</Row>
						<br/>
						<br/>
						<h3 className="section-title">Informations sur l'entreprise d'accueil</h3>
						<label htmlFor="" className="label-required">Nom de l'entreprise</label>
						<Input type="text" onChange={(e) => setNomEntreprise(e.target.value)} value={nomEntreprise}/>
						<br/>
						<label htmlFor="" className="label-required">Adresse</label>
						<Input type="text" onChange={(e) => setAdresseEntreprise(e.target.value)} value={adresseEntreprise}/>
						<br/>
						<label htmlFor="" className="label-required">Fax</label>
						<Input type="text" onChange={(e) => setFaxEntreprise(e.target.value)} value={faxEntreprise}/>
						<br/>
						<label htmlFor="" className="label-required">Téléphone</label>
						<Input type="text" onChange={(e) => setTelephoneEntreprise(e.target.value)} value={telephoneEntreprise}/>
						<br/>
						<label htmlFor="" className="label-required">Email entreprise</label>
						<Input type="text" onChange={(e) => setEmailEntreprise(e.target.value)} value={emailEntreprise}/>
						<br/>
						<label htmlFor="" className="label-required">Encadrant professionnel</label>
						<Input type="text" onChange={(e) => setEncadrantProfessionnel(e.target.value)} value={encadrantProfessionnel} />
						<br/>
						<label htmlFor="" className="label-required">Email de l'encadrant professionnel</label>
						<Input type="text" onChange={(e) => setEmailEncadrantProfessionnel(e.target.value)} value={emailEncadrantProfessionnel}/>
						<br/>
						<Row>
							<Col lg="3"><label htmlFor="" className="">Encadrant Universitaire principale</label></Col>
							<Col>
								<Input 
									type="select" 
									onChange={(e) => {
										if (e.target.value !== "info")
											setEncadrantUniversitairePrincipale(e.target.value)
									}} 
									value={encadrantUniversitairePrincipale}
								>
									<option value="info">---</option>
									{ enseignants && enseignants.map(enseignant => <option value={enseignant._id}>{`${enseignant.nom} ${enseignant.prenom}`}</option>) }
								</Input>
							</Col>
						</Row>
						<br/>
						<Row>
							<Col lg="3"><label htmlFor="" className="">Co-encadreur</label></Col>
							<Col lg="8">
								<Input type="select" onChange={e => handleCoEncadrantChange(e.target.value)} value="info">
									<option value="info" style={{ fontWeight: "bold" }}>
										{
											coEncadrant.length === 0
											?
											"0 élement(s) sélectionné(s)"
											:
											getSelectedCoEncadrant()
										}
									</option>
									{ enseignants && enseignants.map(enseignant => <option value={enseignant._id}>{`${enseignant.nom} ${enseignant.prenom}`}</option>) }
								</Input>
							</Col>
							<Col>
								<Button color="info" block onClick={() => setCoEncadrant([])}>Clear</Button>
							</Col>
						</Row>

						<Button className="mt-4" onClick={handleSubmit}>Envoyer</Button>
					</div>
				</>
			}
		</>
	);
};

export default Deposer;