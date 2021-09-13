import React, { useState, useEffect } from "react";
import { 
	Table, 
	Button, 
	Badge,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
	FormGroup,
	FormText,
} from "reactstrap";
import "./DetailSoutenanceStyle.css";
import userController from '../../../project/services/Controllers/userController';
import axios from "axios";
import { saveAs } from "file-saver";

const DetailSoutenance = (props) => {
	const [ user, setUser ] = useState(null);
	const [ stage, setStage ] = useState(null);
	const [ rapport, setRapport ] = useState(null);

	const [ departements, setDepartements ] = useState([]);

	const [ departement, setDepartement ] = useState("");

	const [ modal, setModal ] = useState(false);

	useEffect(() => {
		getOneUser();
		fetchDepartements();
	}, []);

	useEffect(() => {
		if (user !== null) {
			fetchStage();
			fetchRapport();
		}
	}, [user]);

	const getOneUser = () => {
		const userCtrl = new userController();
		userCtrl.getoneUserById(localStorage.getItem('iduser'))
			.then(response => {
	      // console.log('response from get one user by id', response);
	      setUser(response.data.data);
	    });
	};

	const fetchStage = () => {
		axios.get(`http://localhost:3000/stages/getStage/${props.match.params.stage_id}`)
			.then(response => {
				setStage(response.data.data);
			});
	};

	const fetchRapport = () => {
		axios.get(`http://localhost:3000/rapport/bystage/${props.match.params.stage_id}`)
			.then(res => {
				setRapport(res.data.data);
			});
	};

	const fetchDepartements = () => {
		axios.get("http://localhost:3000/departements/findAllDepartement")
			.then(res => {
				setDepartements(res.data.data);
				if (res.data.data.length !== 0 && departement === "") {
					setDepartement(res.data.data[0]);
				}
			})
	};

	const toggle = () => {
		setModal(!modal);
	};

	const uploadFile = e => {
		const data = new FormData();
		const file = document.querySelector("#file").files[0];
		data.append("file", file);
		axios.post(`http://localhost:3000/rapport/upload?etudId=${user._id}&depId=${departement._id}&stageId=${props.match.params.stage_id}`, data)
			.then(res => {
				console.log(res.data.message);
				toggle();
			})
			.catch(err => {
				console.log(err);
			});
	};

	const downloadFile = (data, filename = "download") => {
    if (!(data instanceof Blob)) return;

    const blob = new Blob([data], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${filename}-${+new Date()}.pdf`;
    link.click();
  };

	const handleDownloadPdf = () => {
		if (rapport !== null) {
    	axios.get(`http://localhost:3000/rapport/download/${rapport._id}`, {
		      responseType: "blob",
		      headers: {
		        Accept: "application/octet-stream"
		      }
		    }).then(res => downloadFile(res.data))
		    .catch(err => {
		      console.log(err);
		    });
		}
  };

	return (
		<>
		{
			user === null
			? 
			<div>loading...</div>
			:
			<div className="detail-soutenance">
				<Modal isOpen={modal} toggle={toggle} size="lg">
	        <ModalHeader toggle={toggle} style={{backgroundColor:"#FFCC00"}}>
	          <div id="contained-modal-title-vcenter">
	            <h1 style={{color:"black", fontSize:"40px", fontWeight:"35px"}}>Upload File</h1>
	          </div>
	        </ModalHeader>
	        <ModalBody>   
	        	{/*<Label for="exampleSelectMulti">Departemant</Label>*/}
	        	<FormGroup>
			        <Input 
			        	type="select" 
			        	onChange={e => setDepartement( departements.find(dep => dep._id === e.target.value) )} 
			        	value={departement ? departement._id : ""}
			        >
			        	{
			        		departements && departements.map((dep, idx) => <option value={dep._id} key={idx}>{dep.nom} ({dep.libelle})</option>)
			        	}
			        </Input>
			      </FormGroup>

			      {/*<Label for="exampleFile">File</Label>*/}
	        	<FormGroup>
			        <Input type="file" name="file" id="file" />
			        <FormText color="muted">
			          This is some placeholder block-level help text for the above input.
			          It's a bit lighter and easily wraps to a new line.
			        </FormText>
			      </FormGroup>

	        </ModalBody>
	        <ModalFooter>
	        	<button
	            type="button" 
	            class="button buttonBlue" 
	            style={{color:"black"}}
	            onClick={uploadFile}
	          >
	            Upload
	            <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
	          </button>
	        </ModalFooter>
	      </Modal>
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
						{/*<tr>
							<td><strong>Jurys</strong></td>
							<td>{ stage && stage.soutenance.jurys.map((jury, idx) => { 
								return <Badge className="mr-2" color="warning">
									{`${jury.nom} ${jury.prenom}`}
								</Badge>
							} ) }</td>
						</tr>*/}
						<tr>
							<td><strong>Jurys</strong></td>
							<td>
								{ stage && stage.soutenance.jurys[0] && <Badge className="mr-2" color="warning"><i className="fa fa-user" />{` ${stage.soutenance.jurys[0].nom} ${stage.soutenance.jurys[0].prenom}`} | <span className="text-secondary">Président</span></Badge> }
								{ stage && stage.soutenance.jurys[1] && <Badge className="mr-2" color="warning"><i className="fa fa-user" />{` ${stage.soutenance.jurys[1].nom} ${stage.soutenance.jurys[1].prenom}`} | <span className="text-secondary">Rapporteur</span></Badge> }
							</td>
						</tr>
						<tr>
							<td><strong>Rapport PDF</strong></td>
							<td>
								<Button 
									size="sm" 
									color="info"
									className="mr-2"
									onClick={handleDownloadPdf}
								>
									<i className="fa fa-download" />{' '}Download
								</Button>
								<Button size="sm" color="info" onClick={toggle}><i className="fa fa-upload" />{' '}Upload</Button>
							</td>
						</tr>
						<tr>
							<td><strong>Page de garte</strong></td>
							<td><Button size="sm" color="info"><i className="fa fa-file" /></Button></td>
						</tr>
						{/*<tr>
							<td><strong>Invitation Encadrant Professionnel</strong></td>
							<td><Button size="sm" color="info">Invitation Encadrant Professionnel</Button></td>
						</tr>*/}
					</tbody>
				</Table>
			</div>
		}
		</>
	);
};

export default DetailSoutenance;