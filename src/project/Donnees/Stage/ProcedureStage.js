import React from "react";
import {
	Container,
	Row,
	Col,
} from "reactstrap";
import pic from "../../../assets/img/procedure-de-stage.png";
import "./ProcedureStage.css";

const ProcedureStage = (props) => {
	return (
		<Container>
			<div className="procedure-stage">
				<h2>PROCEDURE DE STAGE</h2>
				<p>
					La gestion des stages se fait exclusivement sur le site de l'école et vous ne pouvez télécharger les formulaires correspondants qu'une fois votre
					compte étudiant activé et rempli.
				</p>
				<p>
					Pour accéder a la base des donnees de stages contenant toutes les informations utiles a leurs déroulment vous devez posseder un Login et un mot de passe. Le login c'est le numéro de votre
					 carte d'itentité nationale (CIN) et votre mot de passe est le numéro de votre inscription.
				</p>
				<Row>
					<Col md="5">
						<img src={pic} alt=""/>
					</Col>
					<Col>
						<p>Une fois connecté, votre environnement numérique laissera apparaitre plusieurs rubriques, entre autre, une rubrique <strong>"Stages obligatoires"</strong>.</p>
						<p>La premiere chose a faire est de telecharger un formulaire de <strong>"Demande de Stage"</strong> acceptée vous passez a la rubrique <strong>""</strong>.</p>
						<p>Les informations relatives a l'entreprise d'accueil doivent etre saisis, avec le plus grande soin, dans les cases correspondantes. Pour pouvoir telecharger la lettre d'affectation, la direction des stages doit d'abord valider votre dépot d'acceptation de stage.</p>
						<p>La lettre d'affectation doit entre officialisée (apposition du cachet et de la signature de la direction des stages) contre la remise a l'administration de l'acceptation de stage.</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>Il n'est possible de fournir aux étudiant partant en stage qu'une soule lettre d'affectation et il est recommandé de garder constamment une photocopie de tous les documents ralatifs aus stages.</p>
						<p>Une fiche personnalisée d'évaluation des stages doit etre telecharger en accédant a la rubrique <strong>"Stage(s) déposé"</strong>. Cette fiche doit etre remplie par l'encadrant industriel et remise a la direction des stages sans quoi la soutenance de stage ne peut avoir lieu.</p>
						<p>Toutes les demandes d'information peuvent étre adressees a la direction des stages par courrier éléctronique (email) a l'adresse suivante: <strong>admin@isetso.tn</strong></p>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default ProcedureStage;