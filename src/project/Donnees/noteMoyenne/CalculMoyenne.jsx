import React from "react";
import { useState } from "react";
import "./CalculMoyenne.css";
import LigneModule from "./LigneModule";
 
const moduleafare = [
  {
    nom: "Mathematique",
    coef: 3,
    matiere: [
      { nomMatiere: "analyse", coef: 1, note: 0},
      { nomMatiere: "algebre", coef: 1, note: 0 },
      { nomMatiere: "trigonometrie", coef: 4, note: 0 },
    ],
  },
  {
    nom: "Physique",
    coef: 3,
    matiere: [
      { nomMatiere: "Mecanique", coef: 7, note: 10 },
      { nomMatiere: "Chimie", coef: 4, note: 10 },
      { nomMatiere: "electronique", coef: 1, note: 10 },
    ],
  },
  {
    nom: "Réseaux et Sécurité	",
    coef: 3,
    matiere: [
      { nomMatiere: "Architecture Réseaux et CISCO", coef: 1, note: 10 },
      { nomMatiere: "rx", coef: 1, note: 0 },
    ],
  },
  {
    nom: "Langue",
    coef: 1,
    matiere: [
      { nomMatiere: "francais", coef: 2, note: 10 },
      { nomMatiere: "anglais ", coef: 4, note: 10 },
      { nomMatiere: "allemand", coef: 1, note:10 },
    ],
  },
];
export default function CalculMoyenne() {
  const [moyenneTotale, setmoyenneTotale] = useState();
  const calculerMoyenne = () => {
    let totalMatiere = 0;
    let coefMatieres = 0;
    let moyenneMatiere = 0;
   
    let grandTotal = 0;
    let totalCoef = 0;
    let moysemestre1 = 0;
    let moysemestre2 = 0;
    let moyAnnee = 0;
    let moyUE = 0;
    let moyenne = 0;
    let coefUE = 0;
    let SommecoefUE = 0;
    let SommeMoyMat = 0;
    let CoefMat = 0;
    let SommeCoefMat = 0;
    let MoyMat = 0;
    let examen = 0;
    let oral = 0;
    moduleafare.forEach((unmodule) => {
          
//calcul moyen matiere
      MoyMat = examen*0.8 + oral*0.2 ;

      //calcul chaque unité enseignement
moyUE=SommeMoyMat*CoefMat/SommeCoefMat;
SommeCoefMat=CoefMat+CoefMat+CoefMat;
SommeMoyMat=MoyMat+MoyMat+MoyMat;
//calcul moyen semestre1
moyUE=moyUE+moyUE+moyUE ;
moysemestre1=moyUE*coefUE/SommecoefUE;
SommecoefUE=coefUE+coefUE+coefUE; 
coefUE=coefUE+coefUE+coefUE;

//calcul moyen semestre2
moyUE=moyUE+moyUE+moyUE ;
moysemestre1=moyUE*coefUE/SommecoefUE;
SommecoefUE=coefUE+coefUE+coefUE; 
coefUE=coefUE+coefUE+coefUE;
    });
    //calcul moyen année
    moyAnnee=(moysemestre1=moysemestre2)/2;
    setmoyenneTotale(moyenne);
  };

  return (
    <div className="CalculMoyennTotalPage">
      <h1 className="calculMoyenneTitre"> Calculer Moyenne</h1>
      <table className="tableaumatiere">
        <thead className="tablematiereTitre">
          <th>Modules</th>
          <th>Matieres</th>
          <th>Note ds</th>
          <th>Note examen</th>
          <th>Coefficient </th>
          <th>Moyenne Module</th>
        </thead>

        <tbody>
          {moduleafare.map((unModule, index) => (
            <LigneModule unModule={unModule} key={index} />
          ))}
          <tr>Moyenne Totale : {moyenneTotale} </tr>
        </tbody>
      </table>
      <button onClick={() => calculerMoyenne()}>calculer Moyenne</button>

    </div>
  );
}
