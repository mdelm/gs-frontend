import React, { useState, useEffect } from "react";
import { Table, Button, Badge } from "reactstrap";
import "./DetailSoutenanceStyle.css";
import userController from '../../../project/services/Controllers/userController';
import axios from "axios";

const DetailSoutenance = (props) => {
	const [ user, setUser ] = useState(null);
	const [ stage, setStage ] = useState(null);

	useEffect(() => {
		getOneUser();
	}, []);

	useEffect(() => {
		if (user !== null) fetchStage();
	}, [user]);

	const getOneUser = () => {
		const userCtrl = new userController();
		userCtrl.getoneUserById(localStorage.getItem('iduser'))
			.then(response => {
	      console.log('response from get one user by id', response);
	      setUser(response.data.data);
	    });
	};

	const fetchStage = () => {
		axios.get(`http://localhost:3000/stages/getStage/${props.match.params.stage_id}`)
			.then(response => {
				setStage(response.data.data);
			});
	};

	return (
		<>
		{
			user === null
			? 
			<div>loading...</div>
			:
			<div className="detail-soutenance">
				<Table>
					<tbody>
						<tr>
							<td><strong>Sujet ou poste</strong></td>
							<td>{ stage && stage.sujet }</td>
						</tr>
						<tr>
							<td><strong>Date de soutenance</strong></td>
							<td>{ stage && stage.soutenance.date_de_soutenance }</td>
						</tr>
						<tr>
							<td><strong>Salle</strong></td>
							<td>{ stage && stage.soutenance.salle.nom }</td>
						</tr>
						<tr>
							<td><strong>Jurys</strong></td>
							<td>{ stage && stage.soutenance.jurys.map(jury => <Badge className="mr-2" color="warning">{`${jury.nom} ${jury.prenom}`}</Badge>) }</td>
						</tr>
						<tr>
							<td><strong>Rapport PDF</strong></td>
							<td><Button size="sm" color="info"><i className="fa fa-download" /></Button></td>
						</tr>
						<tr>
							<td><strong>Page de garte</strong></td>
							<td><Button size="sm" color="info"><i className="fa fa-file" /></Button></td>
						</tr>
						<tr>
							<td><strong>Invitation Encadrant Professionnel</strong></td>
							<td><Button size="sm" color="info">Invitation Encadrant Professionnel</Button></td>
						</tr>
					</tbody>
				</Table>
			</div>
		}
		</>
	);
};

export default DetailSoutenance;