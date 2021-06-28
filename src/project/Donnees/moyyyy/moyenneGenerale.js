import React, { Component, useState, useEffect } from 'react';
import { FormGroup, Label, Input, Table, Row, Col, Container, Button } from "reactstrap";
import "./notes.css";
import axios from "axios";

const MoyenneGenerale = (props) => {

  const [ etudiants, setEtudiants ] = useState([]);
  const [ etudiantsRachte, setEtudiantsRachte ] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/notes/moyenneGenerale/${props.match.params.nom_classe}`)
      .then(res => {
        setEtudiants(res.data.data);
      });
  });

  const handleListeEtudiantsRachteClick = () => {
    props.history.push(`/notes/classe/${props.match.params.nom_classe}/ListeEtudiantsRachte`);
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
              </tr>
            </thead>
            
            <tbody>

              {etudiants.map((etud, idx) => {
                return <tr key={idx}>
                  <td>{etud.matricule}</td>
                  <td>{etud.nom}</td>
                  <td>{etud.prenom}</td>
                  <td>2020/2021</td>
                  <td>{etud.note_semestre1}</td>
                  <td>{etud.note_semestre2}</td>
                  <td>{etud.moyenne_generale}</td>
                </tr>
              })}

            </tbody>
            
          </Table>
        </Col>
      </Row>
    </Container>
  );

}



export default MoyenneGenerale;