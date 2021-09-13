import React, { useState, useEffect } from "react";
import {
	Container,
  Table,
  Modal, 
  ModalHeader, 
  ModalBody,
  ModalFooter,
  Input,
  Button,
  FormGroup,
  Label,
  FormText,
  Badge,
} from "reactstrap";
import axios from "axios";
import userController from '../../../project/services/Controllers/userController';
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import AddIcon from '@material-ui/icons/Add';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { saveAs } from "file-saver";
import "./TableRapportStyles.css";

const TableRapport = (props) => {
	const [ usr, setUsr ] = useState(null);
	const [ rapports, setRapports ] = useState([]);
	const [ departements, setDepartements ] = useState([]);
	const [ stages, setStages ] = useState([]);
	const [ etudiants, setEtudiants ] = useState([]);

	const [ departement, setDepartement ] = useState("");

	const [ listBy, setListBy ] = useState(null);

	const [ modal, setModal ] = useState(false);

	useEffect(() => {
		getOneUser();
		fetchDepartements();
	}, []);

	useEffect(() => {
		if (usr !== null) { 
			fetchStages();
			fetchEtudiants();
		}
	}, [usr]);

	useEffect(() => {
		if (stages.length > 0) fetchRapports();
	}, [stages]);

	const getOneUser = () => {
		const userCtrl = new userController();
		userCtrl.getoneUserById(localStorage.getItem('iduser'))
			.then(response => {
      	setUsr(response.data.data);
    	});
	};

	const fetchStages = () => {
		axios.get("http://localhost:3000/stages/AllStages")
			.then(res => {
				setStages(res.data.data);
			});
	};

	const fetchEtudiants = () => {
    axios.get('http://localhost:3000/etudiants/findAllEtudiant')
      .then(response => {
        setEtudiants(response.data.data);
      });
  };

	const fetchRapports = () => {
		axios.get("http://localhost:3000/rapport/all")
			.then(res => {
				let data = [];
				if (usr.__t === "etudiant") {
					const usrStages = stages.filter(stage => stage.binome.includes(usr._id)).map(stage => stage._id);
					data = res.data.data.filter(rapport => usrStages.includes(rapport.stage));
				} else if (usr.__t === "enseignant") {

					const usrStages = stages.filter(stage => {
						if (stage.soutenance.jurys.includes(usr._id) || 
								stage.encadrant_universitaire_principale === usr._id ) {
							return true;
						} else {
							return false;
						}
					}).map(stage => stage._id);
					data = res.data.data.filter(rapport => usrStages.includes(rapport.stage));
				}
				setRapports(data);
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
		axios.post(`http://localhost:3000/rapport/upload?etudId=${usr._id}&depId=${departement._id}`, data)
			.then(res => {
				console.log(res.data.message);
				toggle();
				fetchRapports();
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

	const handleDownloadPdf = (rapportId) => {
    axios.get(`http://localhost:3000/rapport/download/${rapportId}`, {
	      responseType: "blob",
	      headers: {
	        Accept: "application/octet-stream"
	      }
	    }).then(res => downloadFile(res.data))
	    .catch(err => {
	      console.log(err);
	    });
  };

  const getDepartementNomFromId = (_id) => {
  	const dep = departements.find(dep => dep._id === _id);
  	if (dep)
  		return `${dep.nom} (${dep.libelle})`;
  	else 
  		return "";
  };

  const getBinomeNames = (_stage_id) => {
  	const stg = stages.find(s => s._id === _stage_id);
  	if (stg) {
  		const etud1 = etudiants.find(e => e._id === stg.binome[0]);
  		const etud2 = etudiants.find(e => e._id === stg.binome[1]);

  		return <>
  			<Badge color="dark" className="text-white"><i className="fa fa-user mr-2" />{`${etud1.nom} ${etud1.prenom}`}</Badge>
  			<br/>
  			<Badge color="dark" className="text-white"><i className="fa fa-user mr-2" />{`${etud2.nom} ${etud2.prenom}`}</Badge>
  		</>;
  	} else {
  		return "---";
  	}
  };

  const getStageSujet = (_stage_id) => {
  	const stg = stages.find(s => s._id === _stage_id);
  	if (stg) {
  		return stg.sujet;
  	} else {
  		return "---";
  	}
  };

	return (
		<Container>
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
		      <br/>
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
      <div> 
        <PageHeader
          title="Bibiotheque"
          subTitle="gestion des rapport"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
        <div
        	style={{
        		display: "flex",
        		justifyContent: "space-between"    	
        	}}
        >
        	{/*<Button
	          color="info"
	          outline
	          onClick={toggle}
	          className="mb-4"	        
	         >
	          <AddIcon />{' '}Upload File
	        </Button>*/}
	        <Input 
	        	type="select" 
	        	onChange={e => setListBy( departements.find(dep => dep._id === e.target.value) )} 
	        	value={listBy ? setListBy._id : ""}
	        	style={{
	        		width: "40%"
	        	}}
	        >
	        	<option value={undefined}>Tout</option>
	        	{
	        		departements && departements.map((dep, idx) => <option value={dep._id} key={idx}>{dep.nom} ({dep.libelle})</option>)
	        	}
	        </Input>
        </div>
      </div>
      <div>
        
        <Table>
          <thead>
            <tr>
              <th scope="col">Sujet</th>
              <th scope="col">Binome</th>
              <th scope="col">Departement</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          	{
          		rapports && rapports
          			.filter(rapport => {
          				if (listBy)
          					return rapport.departement === listBy._id;
          				else 
          					return true;
          			})
	          		.map(rapport => {
	          			return <tr>
	          				<td>{getStageSujet(rapport.stage)}</td>
	          				<td>{getBinomeNames(rapport.stage)}</td>
	          				<td>{getDepartementNomFromId(rapport.departement)}</td>
	          				<td>
	          					<Button size="sm" color="info" onClick={() => handleDownloadPdf(rapport._id) }>
	          						<GetAppRoundedIcon />{' '}Download
	          					</Button>
	          				</td>
	          			</tr>
	          		})
          	}
          </tbody>
        </Table>
      </div>
		</Container>
	);
};

export default TableRapport;