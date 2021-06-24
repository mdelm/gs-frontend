import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './attestation.css'
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

export default attestation;