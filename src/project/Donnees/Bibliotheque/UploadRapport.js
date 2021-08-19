import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import  userController from '../../../project/services/Controllers/userController';

const UploadRapport = (props) => {
	const [ usr, setUsr ] = useState(null);

	useEffect(() => {
		getOneUser();
	}, []);

	const getOneUser = () => {
		const userCtrl = new userController();
		userCtrl.getoneUserById(localStorage.getItem('iduser'))
			.then(response => {
      	setUsr(response.data.data);
    	});
	};

	const uploadFile = e => {
		const data = new FormData();
		const file = e.target.files[0];
		console.log(file);
		data.append("file", file);
		axios.post(`http://localhost:3000/rapport/upload?etudId=${usr._id}`, data)
			.then(res => {
				console.log(res.data.message);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<Container>
			<input type="file" onChange={uploadFile} />
		</Container>
	);
};

export default UploadRapport;