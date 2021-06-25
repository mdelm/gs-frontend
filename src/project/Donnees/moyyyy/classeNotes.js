import React, { Component } from 'react';
import { FormGroup, Label, Input, Table, Row, Col, Container, Button } from "reactstrap";
import "./notes.css";
import axios from "axios";

class ClasseNotes extends Component {

  constructor(props) {
    super(props);

    
  }


  render() {
    const inputStyle = {width: "100%", border: "1px solid gray"};

    return (
      <Container>
        <div className="row text-center" id="header">
          <h1>Note</h1>
        </div>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Matricule</th>
                  <th>Annee Universitaire</th>
                  <th>Semestre</th>
                  <th>Matiere</th>
                  <th>Note</th>
                  <th>Type Note</th>
                </tr>
              </thead>
              
              <tbody>
                  
                <tr>
                  
                  <td>ETUD001</td>
                  <td>2020/2021</td>
                  <td>1</td>
                  <td>DBA Oracle</td>
                  <td>
                    <Row>12</Row>
                    <Row>10</Row>
                  </td>
                  <td>
                    <Row>DS</Row>
                    <Row>Exam</Row>
                  </td>
                </tr>

              </tbody>
              
            </Table>

            
				  </Col>
        </Row>
      </Container>
    );
  };
}

export default ClasseNotes;