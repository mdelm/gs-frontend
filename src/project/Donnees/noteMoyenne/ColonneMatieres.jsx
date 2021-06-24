import React from "react";
import { useState } from "react";
import "./ColonneMatieres.css";

export default function ColonneMatieres({ matiere }) {
  const [noteDS, setnoteDS] = useState();
  const [noteExamen, setnoteExamen] = useState();

  return (
    <div className="matiereetNote">
      <div className="matierenom">{matiere.nomMatiere}</div>
      <input
        className="matierenote"
        type="number"
        onChange={(e) => setnoteDS(e.target.value)}
      />
 <input
        className="matierenote"
        type="number"
        onChange={(e) => setnoteExamen(e.target.value)}
      />
      
    </div>
    
  );
}
