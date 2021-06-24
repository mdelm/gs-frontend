import React, { Component } from 'react';import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBTable, MDBTableBody, MDBTableHead
} from "mdbreact";
import CIcon from '@coreui/icons-react'
import "./notes.css";
import axios from "axios";

class AddNote extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      nom_etudiant: "",
      num_semestre: "",
      nom_module: "",
      coefficient_module: "",
      matt1_nom: "",
      matt1_note_exam: "",
      matt1_note_oral: "",
      matt1_coefficient: "",
      matt2_nom: "",
      matt2_note_exam: "",
      matt2_note_oral: "",
      matt2_coefficient: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*componentDidMount() {
    axios.get(`http://localhost:3001/notes/getByEtudiant/${this.nom_etudiant}`)
      .then(res => {
        const notes = res.data.data;
        this.setState({ notes });
      });

    axios.get(`http://localhost:3001/notes/moyenneAnuelle/${this.nom_etudiant}`)
      .then(res => {
        const moyenneAnuelle = res.data.data.moyenneAnuelle;
        this.setState({ ...this.state, moyenneAnuelle: moyenneAnuelle });
      });
  }*/

  handleChange(e) {
    e.preventDefault();
    this.setState({...this.state, [e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const note = {
      nom_etudiant: this.state.nom_etudiant,
      num_semestre: this.state.num_semestre,
      nom_module: this.state.nom_module,
      coefficient: this.state.coefficient_module,
      matieres: [
        {
          nom_matiere: this.state.matt1_nom,
          examan: this.state.matt1_note_exam,
          oral: this.state.matt1_note_oral,
          coefficient: this.state.matt1_coefficient
        }
      ]
    }

    if (this.state.matt1_nom !== "") {
      note.matieres.push({
          nom_matiere: this.state.matt2_nom,
          examan: this.state.matt2_note_exam,
          oral: this.state.matt2_note_oral,
          coefficient: this.state.matt2_coefficient
      })
    }

    axios.post(`http://localhost:3000/notes/addNote`, note)
      .then(res => {
        console.log(res.data);
      });
    
  }


  render() {
    const inputStyle = {width: "100%", border: "1px solid gray"};

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <div className="row text-center" id="header">
              <h1>Ajouter Une Note</h1><br />
            </div>

            <MDBTable>
              <MDBTableHead color="primary-color">
                <tr>
                  <th>Nom d'Etudiant</th>
                  <th>Semestre</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>
                    <input type="text" name="nom_etudiant" value={this.state.nom_etudiant} onChange={this.handleChange} style={inputStyle} />
                  </td>
                  <td>
                    <input type="text" name="num_semestre" value={this.state.num_semestre} onChange={this.handleChange} style={inputStyle} />
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            <br/>

            <h4>MODULE</h4>
            <MDBTable>
				      <MDBTableHead color="primary-color">
				        <tr>
				          <th>NOM DE MODULE</th>
				          <th>COEFFICENT DE MODULE</th>
				        </tr>
				      </MDBTableHead>
				      <MDBTableBody>
                <tr>
                  <td>
                    <input type="text" name="nom_module" value={this.state.nom_module} onChange={this.handleChange} style={inputStyle} />
                  </td>
                  <td>
                    <input type="text" name="coefficient_module" value={this.state.coefficient_module} onChange={this.handleChange} style={inputStyle} />
                  </td>
                </tr>
				      </MDBTableBody>
				    </MDBTable>
            <br/>

            <h4>MATIERE 1</h4>
            <MDBTable>
              <MDBTableHead color="primary-color">
                <tr>
                  <th>NOM MATIERE</th>
                  <th>NOTE EXAMAN</th>
                  <th>NOTE ORAL</th>
                  <th>COEFFICIENT</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>
                    <input type="text" name="matt1_nom" value={this.state.matt1_nom} onChange={this.handleChange} style={inputStyle} />
                  </td>
                  <td>
                    <input type="text" name="matt1_note_exam" value={this.state.matt1_note_exam} onChange={this.handleChange} style={inputStyle} />
                  </td>
                  <td>
                    <input type="text" name="matt1_note_oral" value={this.state.matt1_note_oral} onChange={this.handleChange} style={inputStyle} />
                  </td>
                  <td>
                    <input type="text" name="matt1_coefficient" value={this.state.matt1_coefficient} onChange={this.handleChange} style={inputStyle} />
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            <br/>

            <h4>MATIERE 2</h4>
            <MDBTable>
              <MDBTableHead color="primary-color">
                <tr>
                  <th>NOM MATIERE</th>
                  <th>NOTE EXAMAN</th>
                  <th>NOTE ORAL</th>
                  <th>COEFFICIENT</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>
                    <input type="text" name="matt2_nom" value={this.state.matt2_nom} onChange={this.handleChange} style={inputStyle} />
                  </td>
                  <td>
                    <input type="text" name="matt2_note_exam" value={this.state.matt2_note_exam} onChange={this.handleChange} style={inputStyle} />
                  </td>
                  <td>
                    <input type="text" name="matt2_note_oral" value={this.state.matt2_note_oral} onChange={this.handleChange} style={inputStyle} />
                  </td>
                  <td>
                    <input type="text" name="matt2_coefficient" value={this.state.matt2_coefficient} onChange={this.handleChange} style={inputStyle} />
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>

            <MDBBtn color="primary" onClick={this.handleSubmit}>Ajouter</MDBBtn>

				  </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
}

export default AddNote;