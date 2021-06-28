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
    this.handleCalculerMoyenneGenerale = this.handleCalculerMoyenneGenerale.bind(this);
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

  handleCalculerMoyenneGenerale() {
    this.props.history.push(`/notes/moyenneGenerale/${this.props.match.params.nom_classe}`);
  }


  render() {
    const inputStyle = {width: "100%", border: "1px solid gray"};

    return (
      <Container>
        <div className="row text-center" id="header">
          <h1>Moyenne Generale <sup>[{this.props.match.params.nom_classe}]</sup></h1>
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
              

                {this.state.etudiants.map(({ etudiant, notes }, idx) => {
                  const sem1Count = notes.filter(note => note.semestre === "1").length;
                  const sem2Count = notes.filter(note => note.semestre === "2").length;
                  const notesCount = sem1Count + sem2Count;

                  return <tbody>
                    {notes.map((note, n) => {

                      return <tr>
                        { (n === 0) ? <td rowSpan={sem1Count + sem2Count}>{etudiant.matricule}</td> : "" }
                        { (n === 0) ? <td rowSpan={sem1Count + sem2Count}>{note.annee_universitaire}</td> : "" }
                        { (n === 0 && note.semestre === "1") ? <td rowSpan={sem1Count}>{note.semestre}</td> : "" }
                        { (n === sem1Count && note.semestre === "2") ? <td rowSpan={sem2Count}>{note.semestre}</td> : "" }
                        <td>{note.matiere.nom}</td>
                        <td>{note.note}</td>
                        <td>{note.type_note}</td>
                      </tr>

                    })}

                  </tbody>
                })}
              
            </Table>
            <Button color="primary" block onClick={this.handleCalculerMoyenneGenerale}>Calculer La Moyenne Generale</Button>

            
				  </Col>
        </Row>
      </Container>
    );
  };
}

export default ClasseNotes;