import React, { Component, useState, useEffect } from 'react';
import { FormGroup, Label, Input, Table, Row, Col, Container, Button } from "reactstrap";
import "./notes.css";
import axios from "axios";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { saveAs } from "file-saver";

const MoyenneGenerale = (props) => {

  const [ etudiants, setEtudiants ] = useState([]);
  const [ etudiantsRachte, setEtudiantsRachte ] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/notes/moyenneGenerale/${props.match.params.nom_classe}`)
      .then(res => {
        setEtudiants(res.data.data);
      });
  });

  const downloadFile = (data, filename = "download") => {
    if (!(data instanceof Blob)) return;

    const blob = new Blob([data], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${filename}-${+new Date()}.pdf`;
    link.click();
  };

  const openFileInNewTab = (data, filename = "download") => {
    if (!(data instanceof Blob)) return;

    const blob = new Blob([data], { type: "application/pdf" });

    const fileUrl = URL.createObjectURL(blob);
    const w = window.open(fileUrl, "_blank");
    w && w.focus();
  };

  const handleDownloadPdf = () => {
    axios.post(`http://localhost:3000/f/createListeEtudiantsRachte/${props.match.params.nom_classe}?annee_universitaire=2020/2021`, {})
      .then(() => {
        axios.get(`http://localhost:3000/f/getListeEtudiantsRachte/${props.match.params.nom_classe}?annee_universitaire=2020/2021`, {
          responseType: "blob",
          headers: {
            Accept: "application/octet-stream"
          }
        }).then(response => downloadFile(response.data))
        .catch(err => {
          console.log(err);
        });
      });
  };

  const handleSendEmail = () => {
    axios.post(`http://localhost:3000/f/sendListeEtudiantsRachte/${props.match.params.nom_classe}?annee_universitaire=2020/2021`)
      .then(() => {
        console.log("Email send successfully");
      })
      .catch((err) => {
        console.log("Unable to send mail");
      });
  }

  const inputStyle = {width: "100%", border: "1px solid gray"};

  return (
    <Container>
      <div className="row text-center" id="header">
        <h1>Note <sup>[{props.match.params.nom_classe}]</sup></h1>
      </div>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Matricule</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>ANNEE UNIVERSITAIRE</th>
                <th>Note Semestre 1</th>
                <th>Note Semestre 2</th>
                <th>Moyenne Generale</th>
                <th>Deliberation</th>
              </tr>
            </thead>
            
            <tbody>

              {etudiants.map((etud, idx) => {
                return <tr key={idx}>
                  <td>{etud.etudiant.matricule}</td>
                  <td>{etud.etudiant.nom}</td>
                  <td>{etud.etudiant.prenom}</td>
                  <td>2020/2021</td>
                  <td>{etud.note_semestre1}</td>
                  <td>{etud.note_semestre2}</td>
                  <td>{etud.moyenne_generale}</td>
                  <td>{etud.deliberation}</td>
                </tr>
              })}

            </tbody>
          </Table>

          Liste Des Etudiants Rachté: 
          <Button color="primary" className="ml-2" onClick={handleDownloadPdf}><GetAppRoundedIcon /> Download PDF</Button>
          <Button color="success" className="ml-2" onClick={handleSendEmail}><SendRoundedIcon /> Send</Button>

        </Col>
      </Row>
    </Container>
  );

}



export default MoyenneGenerale;