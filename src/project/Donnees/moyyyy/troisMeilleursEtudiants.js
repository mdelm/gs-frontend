import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
import "./notes.css";
import axios from "axios";

class TroisMeilleursEtudiants extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      etudiants: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/notes/troisMeilleursEtudiants`)
      .then(res => {
        const etudiants = res.data.data;
        this.setState({ etudiants });
      });
  }

  render() {
    return (
      <MDBContainer>
        <h1>Les Trois Meilleurs Etudiants!</h1>
        <br/>
        <br/>
        <MDBRow>
          {this.state.etudiants.map((etudiant, idx) => <MDBCol md="4"><span class="pill">{idx + 1}</span> {etudiant.nom_etudiant} : {etudiant.moyenneAnuelle}</MDBCol>)}
        </MDBRow>
      </MDBContainer>
    );
  };
}

export default TroisMeilleursEtudiants;