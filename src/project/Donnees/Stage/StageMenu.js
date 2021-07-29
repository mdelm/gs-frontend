import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';
import company from "../../../assets/img/company.png";

const LILink = (props) => {
	return (
		<li className="mb-3">
			<Link to={props.to}>
				<Row noGutters={true}>
					<Col lg="2" className="text-white"><CheckIcon/></Col>
					<Col className="text-white">{ props.label }</Col>
				</Row>
			</Link>
		</li>
	);
};

const StageMenu = (props) => {

	const ulStyle = { border: "none", listStyle: "none" };
	const mainContainerStyle = { 
		background: "#2D8BEF", 
		borderLeft: "12px solid #00364E",
		// padding: "20px 0"
	};
	const companyImgStyle = { width: "100px" };

	return (
		<div className="p-4" style={mainContainerStyle}>
			<Row>
				<Col md="6" style={{ borderRight: "1px solid white" }}>
					<h4 className="text-white mb-4">Stages Obligatoires</h4>
					<Row noGutters={true}>
						<Col md="2" className="text-center">
							<img src={company} alt="company" style={companyImgStyle} />
						</Col>
						<Col md="5">
							<ul style={ulStyle}>
								<LILink to="/stages" label="Journal de Stage" />
								<LILink to="/stages/formulaireDemendeDeStage" label="Formulaire demende de stage" />
								<LILink to="/stages/listeSoutenances" label="Liste des soutenances" />
								<LILink to="/stages" label="Archive des stages" />
							</ul>
						</Col>
						<Col md="5">
							<ul style={ulStyle}>
								<LILink to="/stages" label="Procédure de stage" />
								<LILink to="/stages/deposer/obligatoire" label="Déposer stage" />
								<LILink to="/stages/entreprises" label="Liste des entrepries" />
								<LILink to="/stages/ancien" label="Déposer un ancien stage" />
							</ul>
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<h4 className="text-white mb-4">Stages Facultatifs</h4>
					<Row noGutters={true}>
						<Col md="2" className="text-center">
							<img src={company} alt="company" style={companyImgStyle} />
						</Col>
						<Col md="5">
							<ul style={ulStyle}>
								<LILink to="/stages" label="Procédure de stage" />
								<LILink to="/stages/deposer/facultatif" label="Dépot du stage" />
								<LILink to="/stages/entreprises" label="Liste des entrepries" />
							</ul>
						</Col>
						<Col md="5">
							<ul style={ulStyle}>
								<LILink to="/stages/formulaireDemendeDeStage" label="Formulaire demende de stage" />
								<LILink to="/stages" label="Lettre d'affictation" />
							</ul>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default StageMenu;