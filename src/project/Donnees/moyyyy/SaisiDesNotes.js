import React, { Component } from 'react';
import { FormGroup, Label, Input, Table, Row, Col, Container, Button } from "reactstrap";
import "./notes.css";
import axios from "axios";

class SaisiDesNotes extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      "classes": [],
      "classe": "",
      "etudiants": [],
      "matieres": [],
      "matiere": "",
      "semestre": "1",
      "type_note": "ds",
      "annee_universitaire": "2020/2021"
    };

    this.handleClasseSelectChange = this.handleClasseSelectChange.bind(this);
    this.handleMatiereSelectChange = this.handleMatiereSelectChange.bind(this);
    this.handleAddNotes = this.handleAddNotes.bind(this);
  }

  componentDidMount() {
    this.fetchClasses();
  }

  fetchClasses() {
    axios.get(`http://localhost:3000/classe/findClasse`)
      .then(res => {
        this.setState({ ...this.state, classes: res.data.data });
      });
  }

  fetchMatieres(classe) {
    axios.get(`http://localhost:3000/classe/${classe}/matieres`)
      .then(res => {
        this.setState({ ...this.state, matieres: res.data.data });
      });
  }

  fetchEtudiants(classe) {
    axios.get(`http://localhost:3000/classe/${classe}/etudiants`)
      .then(res => {
        this.setState({ ...this.state, etudiants: res.data.data.map(etudiant => ({ etudiant: etudiant, note: 0})) });
      });
  }

  handleClasseSelectChange(e) {
    this.setState({...this.state, matiere: ""});
    if (e.target.value !== "---") {
      this.fetchMatieres(e.target.value);
      this.fetchEtudiants(e.target.value);
      this.setState({...this.state, classe: e.target.value});
    } else {
      this.setState({...this.state, matieres: [], etudiants: []});
    }
  };

  handleMatiereSelectChange(e) {
    this.setState({...this.state, matiere: e.target.value});
  }

  handleNoteChange(e, idx) {
    const etudiants = this.state.etudiants;
    etudiants[idx].note = e.target.value;

    this.setState({ ...this.state, etudiants: etudiants });
  }

  handleSemestreChange(val) {
    this.setState({ ...this.state, semestre: val});
  };

  handleTypeNoteChange(val) {
    this.setState({ ...this.state, type_note: val});
  }

  handleAddNotes() {
    const notes = this.state.etudiants.map(({ etudiant, note }) => ({
      matiere: { _id: this.state.matiere },
      type_note: this.state.type_note,
      annee_universitaire: this.state.annee_universitaire,
      note: note,
      etudiant: { _id: etudiant._id },
      semestre: this.state.semestre,
      classe: this.state.classe
    }));

    console.log(notes);

    axios.post(`http://localhost:3000/notes/addMultipleNotes`, notes)
      .then(() => this.props.history.push(`/notes/classe/${this.state.classe}`));
  }

  render() {
    const inputStyle = {width: "100%", border: "1px solid gray"};

    return (
      <Container>
        <Row>
          <Col md="12">
            <div className="row text-center" id="header">
              <h1>Saisi des Notes</h1>
            </div>


            <div>
              <Row>

                  <Col md="2"><strong>Anneé Universitaire :</strong></Col>
                  <Col md="4">2020/2021</Col>
              </Row>
              <Row>

                  <Col md="2"><strong>Semestre :</strong></Col>
                  <Col md="4">
                    <FormGroup tag="fieldset">
                      <FormGroup check>
                        <Label check>
                          <Input 
                            onClick={() => this.handleSemestreChange("1")}
                            type="radio" 
                            name="num-semestre" 
                            value="1" 
                          />{' '}1ére Semestre
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input 
                            onClick={() => this.handleSemestreChange("2")}
                            type="radio" 
                            name="num-semestre" 
                            value="2" 
                          />{' '}2éme Semestre
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </Col>


                  <Col md="2"><strong>Note Type :</strong></Col>
                  <Col md="4">
                    <FormGroup tag="fieldset">
                      <FormGroup check>
                        <Label check>
                          <Input 
                            type="radio" 
                            onClick={() => this.handleTypeNoteChange("ds")} 
                            name="type_note" 
                            value="ds" 
                          />{' '}DS
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input 
                            type="radio" 
                            onClick={() => this.handleTypeNoteChange("exam")} 
                            name="type_note" 
                            value="exam" 
                          />{' '}Exam
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input 
                            type="radio" 
                            onClick={() => this.handleTypeNoteChange("tp")} 
                            name="type_note" 
                            value="tp" 
                          />{' '}Tp
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </Col>


              </Row>

              <Row>
                <Col md="2"><strong>Classe :</strong></Col>
                <Col md="4">
                  <FormGroup>
                    <Input onChange={this.handleClasseSelectChange} type="select" name="select" id="exampleSelect" style={{width: "80%"}}>
                      <option value="---">---</option>
                      { this.state.classes.map((classe, idx) => <option key={idx} value={classe.nom_classe}>{classe.nom_classe}</option>) }
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="2"><strong>Matiere :</strong></Col>
                <Col md="4">
                  <FormGroup>
                    <Input onChange={this.handleMatiereSelectChange} type="select" name="select" id="exampleSelect" style={{width: "80%"}}>
                      {this.state.matieres.map((matiere, idx) => <option key={idx} value={matiere._id}>{matiere.nom}</option>)}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Note</th>
                </tr>
              </thead>
              
              <tbody>
                {this.state.etudiants.map(({ etudiant }, idx) => {
                  return <tr key={idx}>
                    <td>{etudiant.nom}</td>
                    <td>{etudiant.prenom}</td>
                    <td>
                      <Input 
                        type="text" 
                        value={this.state.etudiants[idx].note} 
                        onChange={(e) => this.handleNoteChange(e, idx)}
                        placeholder="Saisi la note" 
                      />
                    </td>
                  </tr>;
                })}
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <Button color="primary" block onClick={this.handleAddNotes}>OK</Button>
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

export default SaisiDesNotes;