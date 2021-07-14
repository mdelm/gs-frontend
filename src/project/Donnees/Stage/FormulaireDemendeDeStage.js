import React, { useState, useEffect } from "react";
import { Input, Row, Col, Alert, Button } from "reactstrap";
import userController from '../../../project/services/Controllers/userController';
import "./FormulaireDemendeDeStageStyle.css";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { saveAs } from "file-saver";
import axios from "axios";

const FormulaireDemendeDeStage = (props) => {

	const [ user, setUser ] = useState(null);
	const [ classe, setClasse ] = useState(null);
	const [ societe, setSociete ] = useState(null);

	useEffect(() => {
		getOneUser();
	}, []);

	useEffect(() => {
		if (user !== null) fetchClasse();
	}, [user]);

	const getOneUser = () => {
		const userCtrl = new userController();
		userCtrl.getoneUserById(localStorage.getItem('iduser'))
			.then(response=>{
	      console.log('response from get one user by id', response);
	      setUser(response.data.data);
	    });
	};

	const fetchClasse = () => {
		axios.get(`http://localhost:3000/classe/findClasseByEtudiant/${user._id}`)
			.then(response => {
				setClasse(response.data.data);
			});
	}

	const downloadFile = (data, filename = "download") => {
    if (!(data instanceof Blob)) return;

    const blob = new Blob([data], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${filename}-${+new Date()}.pdf`;
    link.click();
  };

  const handleDownloadPdf = () => {
    axios.post(`http://localhost:3000/f/createFormulaireDemandeDeStage/?etudiant=${user.nom} ${user.prenom}&annee=2020/2021&classe=${classe.nom_classe}&societe=${societe}`, {})
      .then(() => {
        axios.get(`http://localhost:3000/f/createFormulaireDemandeDeStage/?etudiant=${user.nom} ${user.prenom}&annee=2020/2021&classe=${classe.nom_classe}&societe=${societe}`, {
          responseType: "blob",
          headers: {
            Accept: "application/octet-stream"
          }
        }).then(response => downloadFile(response.data))
        .catch(err => {
          console.log(err);
        });
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

					<div className="formulaire">
						<br/>
						<h4><center>A L'ATTENTION DU DIRECTEUR DE LA FORMATION DE LA SOCIETE</center></h4>
						<br/>
						<center><Input onChange={(e) => setSociete(e.target.value)} value={societe} type="text" placeholder="Nom de la société" className="input-nom-societe" /></center>
						<br/>
						<h6>Object: Demande de Stage de fin d'étude</h6>
						<p>
							L'institut Supérieur des Etudes Technologiques de Sousse assure depuis un certain nombre
							d'années une formation en licences devant etre consolidée par un stage d'initiation a la vie professionnelle 
							en entreprise et ce, dans le cadre de l'ouverture de notre institution universitaire sur son environnement socio-économique.
						</p>

						<p>
							Nous venons donc, par la présente, vous demander de bien vouloir acceullir, au sein de votre entreprise, l'étudiant(e) <strong>{`${user.nom} ${user.prenom}`}</strong> 
							inscrit(e) au cours de l'année universitaire <strong>2020/2021</strong> en troisiéme année de la <strong>{classe && classe.nom_classe}.</strong>
							Ce stage obligatoire est prévu pour durer trois mois, du 15 Février au 05 Juin 2021.
						</p>

						<p>
							Nous vous signalons, que durant la période de stage, l'étudiant(e) est couvert(e) par la Mutuelle Accident Scolaire et Universitaire-MASU.
						</p>

						<p>
							Nous vous prions, en cas de réponse positive, de bien vouloir remplir la fiche de stage ci-dessous et la remettre a l'étudiant(e) au la retourner par email
							a l'adresse suivante : admin@isetso.rnu.tn, et ce afin de preparer le lettre d'affectation du stagiaire.
						</p>

						<p>
							En vous remecriant pour votre collaboration, nous vous adressons, Madame, Monsieur, l'expression de notre respect.
						</p>
						<br/>
						<hr type="doted"/>
						<br/>
						<h3><center>Fiche de Stage</center></h3>
						<h4><center>(A remplir avec la plus grande précision car ces informations seront utilisées dans toutes les correspondances offcielles)</center></h4>
						<br/>
						<br/>
						<h6>Entreprise :</h6>
						<hr/>
						<h6>Département / service :</h6>
						<br/>
						<h6>Le responsable direct du stagiaire :</h6>
						<hr/>
						<h6>Email du responsable direct du stagiaire :</h6>
						<br/>
						<h6>Stage prévu du&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; au</h6>
						<hr/>
						<h6>Addresse :</h6>
						<br/>
						<h6>Fax :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
						Tél :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						Email Entreprise :</h6>
						<hr/>
						<Row>
							<Col>
								<div className="signature">
									Signature et cachet du Premier Responsable de l'Entreprise
								</div>
							</Col>
							<Col>
								<div className="signature">
									Directeur des Stages : <br/>Walid HOUCINE
								</div>
							</Col>
						</Row>
						<br/>
						<Button onClick={handleDownloadPdf} color="success" className="mt-4">
							<GetAppRoundedIcon /> Telecharger PDF
						</Button>
						<br/>
					</div>
				</>
			}
		</>
	);
};

export default FormulaireDemendeDeStage;