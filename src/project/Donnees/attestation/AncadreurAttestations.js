import React, { useState, useEffect } from "react";
import axios from "axios";
import  userController from '../../../project/services/Controllers/userController';
import {
	Container,
	Button,
	Table
} from "reactstrap";

const AncadreurAttestations = (props) => {
	const [ user, setUser ] = useState(null);
	const [ attestations, setAttestations ] = useState([]);
	const [ etudiants, setEtudiants ] = useState([]);

	const getOneUser = () => {
    const userCtrl = new userController();
    userCtrl.getoneUserById(localStorage.getItem('iduser')).then(response=>{
      console.log('response from get one user by id', response);
      setUser(response.data.data);
    })
  };

  const getAttestations = () => {
		axios.get("http://localhost:3000/attestation/all")
			.then(res => {
				setAttestations(res.data.data.filter(att => att.ancadreur === user._id && att.confirmed_by_ancadreur === false));
			});
	}

	const getEtudiants = () => {
		axios.get("http://localhost:3000/etudiants/findAllEtudiant")
			.then(res => {
				setEtudiants(res.data.data);
			});
	};

	useEffect(() => {
		getOneUser();
	}, []);

	useEffect(() => {
		if (user !== null) {
			getAttestations();
			getEtudiants();
		}
	}, [user]);

	const handleConfirmer = (_id) => {
		axios.put("http://localhost:3000/attestation/confirm/ancadreur", { attestationId: _id })
			.then(res => {
				getAttestations();
			});
	};

	return (
		<Container>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Matricule d'Etudiant</th>
						<th>Nom d'Etudiant</th>
						<th>Specialite</th>
						<th>Raison</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{
						attestations && attestations.map((att, idx) => {
							const etudiant = etudiants.find(etud => etud._id === att.etudiant);
							return <tr key={idx}>
								<td>{idx+1}</td>
								<td>{etudiant && etudiant.matricule}</td>
								<td>{etudiant && `${etudiant.nom} ${etudiant.prenom}`}</td>
								<td>{att.specialite}</td>
								<td>{att.raison}</td>
								<td>
									<Button 
										color="info"
										onClick={() => handleConfirmer(att._id)}
									>
										<i className="fa fa-check" /> Confirmer
									</Button>
								</td>
							</tr>
						})
					}
				</tbody>
			</Table>
		</Container>
	);
};

export default AncadreurAttestations;