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
  FormText
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

	const [ departement, setDepartement ] = useState("");

	const [ listBy, setListBy ] = useState(null);

	const [ modal, setModal ] = useState(false);

	useEffect(() => {
		getOneUser();
		fetchRapports();
		fetchDepartements();
	}, []);

	const getOneUser = () => {
		const userCtrl = new userController();
		userCtrl.getoneUserById(localStorage.getItem('iduser'))
			.then(response => {
      	setUsr(response.data.data);
    	});
	};

	const fetchRapports = () => {
		axios.get("http://localhost:3000/rapport/all")
			.then(res => {
				setRapports(res.data.data);
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
        	<Button
	          color="info"
	          outline
	          onClick={toggle}
	          className="mb-4"	        
	         >
	          <AddIcon />{' '}Upload File
	        </Button>
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
              <th scope="col">Action</th>
              <th scope="col">Nom</th>
              <th scope="col">Departement</th>
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
	          				<td>
	          					<Button size="sm" color="info" onClick={() => handleDownloadPdf(rapport._id) }>
	          						<GetAppRoundedIcon />
	          					</Button>
	          				</td>
	          				<td>{rapport.nom}</td>
	          				<td>{getDepartementNomFromId(rapport.departement)}</td>
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