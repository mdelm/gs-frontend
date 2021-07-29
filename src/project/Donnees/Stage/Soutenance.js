import React, { useEffect, useState } from "react";
import { 
	Table, 
	Button, 
	Input, 
	Label, 
	Col, 
	Row, 
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter
} from "reactstrap";
import axios from "axios";
import "./SoutenanceStyle.css";

const Soutenance = (props) => {
	const [ stages, setStages ] = useState([]);
	const [ enseignants, setEnseignants ] = useState([]);
	const [ salles, setSalles ] = useState([]);

	const [ jurys, setJurys ] = useState([]);
	const [ salle, setSalle ] = useState("");
	const [ stageId, setStageId ] = useState(null);
	const [ dateDeSoutenance, setDateDeSoutenance ] = useState("");

	const [modal, setModal] = useState(false);

	useEffect(() => {
		fetchStages();
		fetchEnseignants();
		fetchSalles();
	}, []);

	const fetchStages = () => {
		axios.get(`http://localhost:3000/stages/v2/AllStages`)
			.then(response => {
				setStages(response.data.data);
			});
	};

	const fetchEnseignants = () => {
		axios.get(`http://localhost:3000/enseignant/findEnseignent`)
			.then(response => {
				setEnseignants(response.data.data);
			});
	};

	const fetchSalles = () => {
		axios.get(`http://localhost:3000/salles/findAllSalle`)
			.then(response => {
				setSalles(response.data.data);
			});
	};

	const handleJurysChange = (val) => {
		if (val !== "info") {
			if (!jurys.includes(val) && jurys.length < 4) {
				setJurys([...jurys, val]);
			}
		}
	};

	const getSelectedJurys = () => {
		let str = "";
		for(let i = 0; i < jurys.length; i++) {
			let enseignant = enseignants.find(ensei => ensei._id === jurys[i]);
			str += `[${i+1}] ${enseignant.nom} ${enseignant.prenom}`;
			if (i !== jurys.length - 1)
				str += ", "
		}
		str += "";
		return str;
	};

  const toggle = (stageId) => {
  	setModal(!modal);
  	setStageId(stageId);
  };

  const editSoutenance = (stageId) => {
  	toggle(stageId);
  	const stage = stages.find(stage => stage._id === stageId);
  	setJurys(stage.soutenance.jurys.map(jury => jury._id));
  	setSalle(stage.soutenance.salle._id);
  };

  const handleSubmit = () => {
  	const soutenance = {
  		date_de_soutenance: dateDeSoutenance,
  		jurys: jurys.map(jury => ({ _id: jury })),
  		salle: { _id: salle }
  	}
  	axios.post(`http://localhost:3000/stages/AddSoutenance/${stageId}`, soutenance)
  		.then(() => {
  			fetchStages();
  			setSalle("");
  			setDateDeSoutenance("");
  			setJurys([]);
  		});
  };

	return (
		<div className="soutenance">

			<div>
	      <Modal isOpen={modal} toggle={() => toggle(null)}>
	        <ModalHeader toggle={() => toggle(null)}>{stageId}</ModalHeader>
	        <ModalBody>
	          
	        	<label htmlFor="date_de_soutenance" className="label-required">Date de Soutenance</label>
						<Input type="date" className="mb-4" onChange={(e) => setDateDeSoutenance(e.target.value)} value={dateDeSoutenance} />

						<label htmlFor="jurys" className="label-required">Jurys</label>
						<Input type="select" onChange={e => handleJurysChange(e.target.value)} value="info" className="mb-1">
							<option value="info" style={{ fontWeight: "bold" }}>
								{
									jurys.length === 0
									?
									"0 élement(s) sélectionné(s)"
									:
									getSelectedJurys()
								}
							</option>
							{ enseignants && enseignants.map(enseignant => <option value={enseignant._id}>{`${enseignant.nom} ${enseignant.prenom}`}</option>) }
						</Input>
						<Button className="mb-4" size="sm" color="warning" onClick={() => setJurys([])}>Reset</Button>
						<br/>

						<label htmlFor="salle" className="label-required">Salle</label>
						<Input type="select" className="mb-4" onChange={(e) => setSalle(e.target.value)} value={salle}>
							{ salles && salles.map(salle => <option value={salle._id}>{salle.nom}</option>) }
						</Input>

	        </ModalBody>
	        <ModalFooter>
	          <Button 
	          	color="info" 
	          	onClick={() => { 
	          		handleSubmit(); 
	          		toggle(null); 
	          	}}>Set</Button>{' '}
	          <Button color="secondary" onClick={() => toggle(null)}>Cancel</Button>
	        </ModalFooter>
	      </Modal>
	    </div>

			<h2>LES SOUTENANCES <sup className="text-info">ADMIN</sup></h2>
			<br/>

			<Table>
				<thead>
					<tr>
						<th>Sujet</th>
						<th>Etud 1</th>
						<th>Etud 2</th>
						<th>Type De Stage</th>
						<th>Soutenance</th>
					</tr>
				</thead>
				<tbody>
					{ stages && stages.map(stage => {
						return <tr>
							<td>{stage.sujet}</td>
							<td>{stage.binome[0] ? `${stage.binome[0].nom} ${stage.binome[0].prenom}` : "---"}</td>
							<td>{stage.binome[1] ? `${stage.binome[1].nom} ${stage.binome[1].prenom}` : "---"}</td>
							<td>{stage.type_stage}</td>
							{ 
								stage.soutenance
								? 
								<td>{stage.soutenance.date_de_soutenance} 
									<Button onClick={() => editSoutenance(stage._id)} className="ml-2" color="success" size="sm"><i className="fa fa-edit"/> edit</Button>
								</td>
								:
								<td>
									<Button color="info" onClick={() => toggle(stage._id)} >
										<i className="fa fa-calendar"/> Set New Date
									</Button>
								</td>
							}
						</tr>
					}) }
				</tbody>
			</Table>
		</div>
	);
};

export default Soutenance;