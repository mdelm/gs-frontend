import React, { useState, useEffect } from "react";
import {
	Container,
	Input,
	Button,
	Row,
	Col,
	FormGroup
} from "reactstrap";
import axios from "axios";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

const UploadSignature = (props) => {

	const [ enseignants, setEnseignants ] = useState([]);
	const [ enseignant, setEnseignant ] = useState([]);

	useEffect(() => {
    getAllEnseignants();
  }, []);

	const getAllEnseignants = () => {
    axios.get('http://localhost:3000/enseignant/findEnseignent')
      .then(response => {
        setEnseignants(response.data.data);
      });
  };

  const uploadFile = e => {
		const data = new FormData();
		const file = document.querySelector("#signature").files[0];
		data.append("signature", file);
		axios.post(`http://localhost:3000/enseignant/uploadsignature/${enseignant.cin}`, data)
			.then(res => {
				console.log(res.data.message);
			});
	};

	return (
		<Container className="mt-4">
			<div> 
        <PageHeader
          title="Signatures"
          subTitle="gestion des signatures"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
      </div>
			<Row>
				<Col>
					<FormGroup>
              <Input 
                type="select"
                onChange={e => setEnseignant(enseignants.find(ensei => ensei._id === e.target.value))}
                value={enseignant ? enseignant._id : ""}
              >
                <option value={null}>--- choissez un enseignant ---</option>
                {
                  enseignants && enseignants.map((ensei, idx) => <option value={ensei._id} key={idx}>{ensei.nom} {ensei.prenom}</option>)
                }
              </Input>
            </FormGroup>
				</Col>
				<Col>
					<Input type="file" id="signature" name="signature" />
				</Col>
			</Row>
			<Button
				color="info"
				onClick={uploadFile}
			>
				Upload Signature
			</Button>
		</Container>
	);
};

export default UploadSignature;