import React, { Component, useState, useEffect } from 'react';
import { FormGroup, Label, Input, Table, Row, Col, Container, Button } from "reactstrap";
import "./notes.css";
import axios from "axios";

const ListeEtudiantsRachte = (props) => {

  const [ etudiants, setEtudiants ] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/notes/classe/${props.match.params.nom_classe}/listeEtudiantsRachte?annee_universitaire=2020/2021`)
      .then(res => {
        setEtudiants(res.data.data);
      });
  });

  const handleListeEtudiantsRachteClick = () => {
    // Export PDF 
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

              {etudiants.map(({ etudiant, note_semestre1, note_semestre2, moyenne_generale, deliberation }, idx) => {
                return <tr key={idx}>
                  <td>{etudiant.matricule}</td>
                  <td>{etudiant.nom}</td>
                  <td>{etudiant.prenom}</td>
                  <td>2020/2021</td>
                  <td>{note_semestre1}</td>
                  <td>{note_semestre2}</td>
                  <td>{moyenne_generale}</td>
                </tr>
              })}

            </tbody>
            
          </Table>

          
        </Col>
      </Row>
    </Container>
  );

}



export default ListeEtudiantsRachte;