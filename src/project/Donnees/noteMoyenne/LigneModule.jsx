import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ColonneMatieres from "./ColonneMatieres";

export default function LigneModule({ unModule }) {
  const [moyenneModule, setmoyenneModule] = useState();
  useEffect(() => {}, []);

  return (
    <tr>
      <td>{unModule.nom}</td>
      <td colSpan={2}>
        {unModule.matiere.map((mat, index) => (
          <ColonneMatieres matiere={mat} key={index} />
        ))}
      </td>
      <td>{unModule.coef}</td>

      <td>{unModule.coef}</td>
    </tr>
  );
}
