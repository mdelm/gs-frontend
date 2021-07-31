import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable, MDBTableBody, MDBTableHead
} from "mdbreact";
import "./notes.css";
import axios from "axios";
import userController from '../../../project/services/Controllers/userController';

const Notes = (props) => {
  const [ user, setUser ] = useState(null);
  const [ notes, setNotes ] = useState(null);
  const [ classe, setClasse ] = useState(null);

  const [ moyenneGenerale, setMoyenneGenerale ] = useState("");

  const [ sem1Count, setSem1Count ] = useState("");
  const [ sem2Count, setSem2Count ] = useState("");
  const [ notesCount, setNotesCount ] = useState("");

  useEffect(() => {
    getOneUser();
  }, []);

  useEffect(() => {
    if (user !== null) fetchClasse();
  }, [user]);

  useEffect(() => {
    if (classe !== null) {
      fetchNotes();
      fetchMoyenneGenerale();
    }
  }, [classe]);

  const getOneUser = () => {
    const userCtrl = new userController();
    userCtrl.getoneUserById(localStorage.getItem('iduser')).then(response=>{
      console.log('response from get one user by id', response);
      setUser(response.data.data);
    })
  };

  const fetchClasse = () => {
    axios.get(`http://localhost:3000/classe/findClasseByEtudiant/${user._id}`)
      .then(response => {
        setClasse(response.data.data.nom_classe);
      });
  }

  const fetchNotes = () => {
    axios.get(`http://localhost:3000/notes/classe/${classe}?id_etud=${user._id}`)
      .then(response => {
        const { notes } = response.data.data;
        setNotes(notes);

        const c1 = notes.filter(note => note.semestre === "1").length;
        const c2 = notes.filter(note => note.semestre === "2").length;

        setSem1Count(c1);
        setSem2Count(c2);
        setNotesCount(c1 + c2);
      });
  };

  const fetchMoyenneGenerale = () => {
    axios.get(`http://localhost:3000/notes/moyenneGenerale/${classe}?id_etud=${user._id}`)
      .then(response => {
        setMoyenneGenerale(response.data.data);
      });
  };

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
                <th>MATRICULE</th>
                <th>ANNEE UNIVERSITAIER</th>
                <th>SEMESTRE</th>
                <th>NOM MATRIERE</th>
                <th>NOTE MATRIERE</th>
                <th>TYPE DE NOTE</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {notes && notes.map((note, n) => {

                return <tr>
                  { (n === 0) ? <td rowSpan={sem1Count + sem2Count}>{user.matricule}</td> : "" }
                  { (n === 0) ? <td rowSpan={sem1Count + sem2Count}>{note.annee_universitaire}</td> : "" }
                  { (n === 0 && note.semestre === "1") ? <td rowSpan={sem1Count}>{note.semestre}</td> : "" }
                  { (n === sem1Count && note.semestre === "2") ? <td rowSpan={sem2Count}>{note.semestre}</td> : "" }
                  <td>{note.nom_matiere}</td>
                  <td>{note.note}</td>
                  <td>{note.type_note}</td>
                </tr>

              })}
            </MDBTableBody>
            <MDBTableHead color="primary-color">
              <tr>
                <th>Note S1: <br/>{moyenneGenerale.note_semestre1}</th>
                <th>Note S2: <br/>{moyenneGenerale.note_semestre2}</th>
                <th colSpan="2">Moyenne Générale: <br/>{moyenneGenerale.moyenne_generale}</th>
                <th colSpan="2">Deliberation: <br/>{moyenneGenerale.deliberation}</th>
              </tr>
            </MDBTableHead>
          </MDBTable>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );

};

export default Notes;