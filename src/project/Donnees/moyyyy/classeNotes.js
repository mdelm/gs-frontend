import React, { Component } from 'react';
import { FormGroup, Label, Input, Table, Row, Col, Container, Button } from "reactstrap";
import "./notes.css";
import axios from "axios";

class ClasseNotes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      etudiants: []
    }

    this.fetchClasseNotes = this.fetchClasseNotes.bind(this);
  }

  componentDidMount() {
    this.fetchClasseNotes();
  }

  fetchClasseNotes() {
    axios.get(`http://localhost:3000/notes/classe/${this.props.match.params.nom_classe}`)
      .then(res => {
        this.setState({...this.state, etudiants: res.data.data});
      });
  }


  render() {
    const inputStyle = {width: "100%", border: "1px solid gray"};

    return (
      <Container>
        <div className="row text-center" id="header">
          <h1>Note <sup>[{this.props.match.params.nom_classe}]</sup></h1>
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

                {this.state.etudiants.map(({ etudiant, notes }, idx) => {
                  return <tr key={idx}>
                    <td>{etudiant.matricule}</td>
                    <td>2020/2021</td>
                    <td>1</td>
                    <td>
                      {notes.map((note, idx) => <Row key={idx}>{note.matiere.nom}</Row>)}
                    </td>
                    <td>
                      {notes.map((note, idx) => <Row key={idx}>{note.note}</Row>)}
                    </td>
                    <td>
                      {notes.map((note, idx) => <Row key={idx}>{note.type_note}</Row>)}
                    </td>
                  </tr>
                })}

              </tbody>
              
            </Table>

            
				  </Col>
        </Row>
      </Container>
    );
  };
}

export default ClasseNotes;