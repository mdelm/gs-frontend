import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Button,
	Table,
	Container
} from "reactstrap";
import { saveAs } from "file-saver";

const AdminAttestations = (props) => {
	const [ attestations, setAttestations ] = useState([]);
	const [ etudiants, setEtudiants ] = useState([]);

	const getAttestations = () => {
		axios.get("http://localhost:3000/attestation/all")
			.then(res => {
				setAttestations(res.data.data);
			});
	};

	const getEtudiants = () => {
		axios.get("http://localhost:3000/etudiants/findAllEtudiant")
			.then(res => {
				setEtudiants(res.data.data);
			});
	};

	useEffect(() => {
		getAttestations();
		getEtudiants();
	}, []);

	const Oui = (props) => {
		return <span
			style={{
				color: "darkgreen",
				border: "1px solid green",
				borderRadius: "10px",
				padding: "4px 6px"
			}}
		>
			<i className="fa fa-check" /> Oui
		</span>
	};

	const Non = (props) => {
		return <span
			style={{
				color: "darkred",
				border: "1px solid red",
				borderRadius: "10px",
				padding: "4px 6px"
			}}
		>
			<i className="fa fa-times" /> Non
		</span>
	};

	const downloadFile = (data, filename = "download") => {
    if (!(data instanceof Blob)) return;

    const blob = new Blob([data], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${filename}-${+new Date()}.pdf`;
    link.click();
  };

	const handleDownloadPdf = (attestationId) => {
    axios.get(`http://localhost:3000/attestation/download/${attestationId}`, {
	      responseType: "blob",
	      headers: {
	        Accept: "application/octet-stream"
	      }
	    }).then(res => downloadFile(res.data))
	    .catch(err => {
	      console.log(err);
	    });
  };

	return (
		<Container className="mt-4">
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Matricule d'Etudiant</th>
						<th>Nom d'Etudiant</th>
						<th>Confirmé par l'ancadreur</th>
						<th>Confirmé par chef de departement</th>
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
								<td>{att.confirmed_by_ancadreur ? <Oui />: <Non />}</td>
								<td>{att.confirmed_by_chef_departement ? <Oui />: <Non />}</td>
								<td>
									<Button
										color="info"
										disabled={!(att.confirmed_by_ancadreur && att.confirmed_by_chef_departement)}
										onClick={() => handleDownloadPdf(att._id)}
									>
										<i className="fa fa-download" />
									</Button>
									<Button
										color="danger"
										className="ml-2"
									>
										<i className="fa fa-trash" />
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

export default AdminAttestations;