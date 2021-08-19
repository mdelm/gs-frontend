import React, { useState } from 'react';
import axios from 'axios';
import {
  Input,
  Button,
  Container,
  FormGroup,
  Label,
  Row, 
  Col
} from "reactstrap"; 

const Attestation = (props) => {
  const [ nom, setNom ] = useState("");
  const [ prenom, setPrenom ] = useState("");
  const [ date, setDate ] = useState("");
  const [ specialite, setSpecialite ] = useState("");
  const [ niveau, setNiveau ] = useState("");

  return (
    <Container className="mt-4">
      <h2> Attestation de présence</h2>
      <Row>
        <Col>
          <FormGroup>
            <Label>Nom</Label>
            <Input type="text" onChange={(e) => setNom(e.target.value)} value={nom} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Prenom</Label>
            <Input type="text" onChange={(e) => setPrenom(e.target.value)} value={prenom} />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label>Date</Label>
        <Input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
      </FormGroup>
      <FormGroup>
        <Label>Specialite</Label>
        <Input type="text" onChange={(e) => setSpecialite(e.target.value)} value={specialite} />
      </FormGroup>
      <FormGroup>
        <Label>Niveau d'étude</Label>
        <Input type="text" onChange={(e) => setNiveau(e.target.value)} value={setNiveau} />
      </FormGroup>
      <Row>
        <Col>
          <FormGroup>
            <Label>Departement</Label>
            <Input type="select">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Ancadreur</Label>
            <Input type="select">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <br/>
      <Button color="info">
        Demander l'attestation
      </Button>
    </Container>
  );
};

/*
class attestation extends Component {
    state = {
        nom: '',
        prenom:'',
        date_naissance: '',
        specialite:'',
        niveau_etude:'',
        
      } 
      handleChange = ({ target: { value, nom }}) => this.setState({ [nom]: value })
    
      createAndDownloadPdf = () => {
     
        axios.post('http://localhost:3000/create_pdf', this.state)
          .then(() => axios.get('http://localhost:3000/fetch_pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
              saveAs(pdfBlob, 'newPdf.pdf');
          })
      }

      
    render() {
        return (
          <div className="App">
            <h2> Attestation de présence</h2>
            <input type="text" placeholder="nom" name="nom" onChange={this.handleChange}onChange={event=>this.setState({nom:event.target.value})}/><br></br><br></br>
            <input type="text" placeholder="prenom" name="prenom" onChange={this.handleChange} onChange={event=>this.setState({prenom:event.target.value})}/><br></br><br></br>
            <input type="date" placeholder="date_naissance" name="date_naissance" onChange={this.handleChange} onChange={event=>this.setState({date_naissance:event.target.value})}/><br></br><br></br>
            <input type="text" placeholder="specialité" name="specialité" onChange={this.handleChange}onChange={event=>this.setState({specialite:event.target.value})} /><br></br><br></br>
            <input type="text" placeholder="niveau_étude" name="niveau_étude" onChange={this.handleChange}onChange={event=>this.setState({niveau_etude:event.target.value})} /><br></br><br></br>

            <button onClick={this.createAndDownloadPdf}>Download PDF</button>
          </div>
        );
      }
}
*/
export default Attestation;