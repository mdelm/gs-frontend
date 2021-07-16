import React, { useEffect, useState } from "react";
import { Table, Row, Col, Input, FormGroup, Label } from "reactstrap";
import axios from "axios";
import "./EntrepriseStyle.css";

const Entreprise = (props) => {

	const [ entreprises, setEntreprises ] = useState([]);
	const [ affichage, setAffichage ] = useState(100);
	const [ searchTerm, setSearchTerm ] = useState("");

	useEffect(() => {
		fetchEntreprises();
	}, []);

	const fetchEntreprises = () => {
		axios.get(`http://localhost:3000/entreprises/getEntreprise`)
			.then(response => {
				console.log(response.data.data);
				setEntreprises(response.data.data);
			});
	};

	return (
		<div className="entreprise">
			<Row>
				<Col>
					<FormGroup>
		        <Label for="affichage">Affichage</Label>
		        <Input type="select" onChange={(e) => setAffichage(e.target.value)} value={affichage} name="affichage" id="affichage">
		        	<option value="5">5</option>
		        	<option value="10">10</option>
		        	<option value="50">50</option>
		        	<option value="100">100</option>
		       	</Input>
		      </FormGroup>
				</Col>
				<Col>
					<FormGroup>
		        <Label for="recherche">Recherche</Label>
		        <Input type="text" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} name="recherche" id="recherche"/>
		      </FormGroup>
				</Col>
			</Row>
			<Table borderless={true} striped>
				<thead>
					<tr>
						<th>Nom de l'entreprise</th>
						<th>Adresse</th>
						<th>Telephone</th>
						<th>Fax</th>
						<th>Email entreprise</th>
						<th>Specialite</th>
					</tr>
				</thead>
				{
					<thead>
						{ entreprises && entreprises
							.filter(entreprise => {
								if (searchTerm !== "")
									return entreprise.nom.includes(searchTerm) || entreprise.nom.startsWith(searchTerm) || entreprise.nom.endsWith(searchTerm)
								else
									return true
							})
							.map(entreprise => {
							return <tr>
								<td>{entreprise.nom}</td>
								<td>{entreprise.adresse}</td>
								<td>{entreprise.telephone}</td>
								<td>{entreprise.fax}</td>
								<td>{entreprise.email}</td>
								<td>{entreprise.specialite}</td>
							</tr>
						}) }
					</thead>
				}
			</Table>
		</div>
	)
};

export default Entreprise;