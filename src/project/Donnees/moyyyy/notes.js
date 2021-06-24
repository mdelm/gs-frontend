import React, { Component } from 'react';
import {
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

class Notes extends Component {

  constructor(props) {
    super(props);

    this.nom_etudiant = props.match.params.nom_etudiant;

    this.state = { 
      notes: [],
      moyenneAnuelle: 0
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/notes/getByEtudiant/${this.nom_etudiant}`)
      .then(res => {
        const notes = res.data.data;
        this.setState({ notes });
      });

    axios.get(`http://localhost:3000/notes/moyenneAnuelle/${this.nom_etudiant}`)
      .then(res => {
        const moyenneAnuelle = res.data.data.moyenneAnuelle;
        this.setState({ ...this.state, moyenneAnuelle: moyenneAnuelle });
      });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <div className="row text-center" id="header">
              <h1>Calculez votre moyenne générale!</h1><br />
            </div>
            <MDBTable>
				      <MDBTableHead color="primary-color">
				        <tr>
				          <th>MODULE</th>
				          <th>MATIERES</th>
				          <th>NOTE MATIEREs</th>
                  <th>COEFF. MATIEREs</th>
				          <th>NOTE MODULE</th>
				          <th>COEFFICENT</th>
				        </tr>
				      </MDBTableHead>
				      <MDBTableBody>
                {this.state.notes.map(note => (<tr>
                    <td>{note.nom_module}</td>
                    <td>
                      {note.matieres.map(matiere => <MDBRow>{matiere.nom_matiere}</MDBRow>)}
                    </td>
                    <td>
                      <center>
                      {note.matieres.map(matiere => <MDBRow><span class="pill">{matiere.moy_mat}</span></MDBRow>)}
                      </center>
                    </td>
                    <td>
                      <center>
                      {note.matieres.map(matiere => <MDBRow><span class="pill">{matiere.coefficient}</span></MDBRow>)}
                      </center>
                    </td>
                    <td><center><span class="pill">{note.note_module}</span></center></td>
                    <td><center><span class="pill">{note.coefficient}</span></center></td>
                  </tr>))}
				      </MDBTableBody>
              <MDBTableHead color="primary-color">
                <tr>
                  <th></th>
                  <th></th>
                  <th colSpan="2">Moyenne Générale</th>
                  <th colSpan="2">{this.state.moyenneAnuelle}</th>
                </tr>
              </MDBTableHead>
				    </MDBTable>
				  </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
}

export default Notes;