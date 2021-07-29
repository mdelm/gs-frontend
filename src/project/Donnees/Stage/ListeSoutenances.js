import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import userController from '../../../project/services/Controllers/userController';

const ListeSoutenances = (props) => {
	const [ stages, setStages ] = useState([]);
	const [ user, setUser ] = useState(null);

	useEffect(() => {
		getOneUser();
	}, []);

	useEffect(() => {
		if (user !== null) fetchStages();
	}, [user]);

	const getOneUser = () => {
		const userCtrl = new userController();
		userCtrl.getoneUserById(localStorage.getItem('iduser'))
			.then(response => {
	      console.log('response from get one user by id', response);
	      setUser(response.data.data);
	    });
	};

	const fetchStages = () => {
		axios.get(`http://localhost:3000/stages/soutenances/${user._id}`)
			.then(response => {
				setStages(response.data.data);
			});
	};

	const soutenanceDetails = (stageId) => {
		props.history.push(`/stages/detailsSoutenance/${stageId}`);
	};

	return (
		<div>
			<Table>
				<thead>
					<tr>
						<th>Sujet</th>
						<th>Etudiant 1</th>
						<th>Etudiant 2</th>
						<th>Type</th>
						<th>Date de Soutenance</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{ stages && stages.map(stage => {
						return <tr>
							<td>{stage.sujet}</td>
							<td>{stage.binome[0] ? `${stage.binome[0].nom} ${stage.binome[0].prenom}` : "---"}</td>
							<td>{stage.binome[1] ? `${stage.binome[1].nom} ${stage.binome[1].prenom}` : "---"}</td>
							<td>{stage.type_stage}</td>
							<td>{stage.soutenance.date_de_soutenance}</td>
							<td><Button onClick={() => soutenanceDetails(stage._id)} color="info" size="sm"><i className="fa fa-list"/> Details</Button></td>
						</tr>
					}) }
				</tbody>
			</Table>
		</div>
	);
};

export default ListeSoutenances;