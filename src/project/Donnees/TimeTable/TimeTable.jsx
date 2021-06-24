import React, { Component, useState } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import timeTableController from '../../services/Controllers/timeTableController'

const controler = new timeTableController()
const { TabPane } = Tabs;

function TimeTable() {
  const [seance1 , setseance1]=useState('')
  const [seance2 , steseance2]=useState('')
  const [seance3  , setseance3]=useState('')
  const [seance4 ,  setseance4]=useState('')
  const [data, setdata] = useState(null)
  const [emploiinfos, setemploiinfos] = useState('')
  const [seancenum, setseancenum] = useState(1)
  const seanceconfirmed = () => {
    setseancenum(seancenum + 1)
  }
  const [classe, setClasse] = useState('')
  const [annee, setanne] = useState('')
  const [semestre, setsemestre] = useState('')
  const handleChange = (e) => {
    setseance1(e.target.value)
    steseance2(e.target.value)
    setseance3(e.target.value)
    setseance4(e.target.value)
    setemploiinfos(emploiinfos.concat('.' + e.target.value))
    console.log(emploiinfos);
  }
  const valider = () => {
    let data = {     
      classe :classe ,
      annee:annee,
      semestre:semestre,
      emplois:emploiinfos, 
    }
    console.log(data);
     controler.Add( data )
    .then((res) => {
      console.log(res);
    } )
    .catch(error => {
      console.log(error);
    }) 
  }

  
  const DayContent = () => {
    return (
      <>
        <table>
          <tr>
            <td>seance 1</td>
            <td>
              {
                seancenum === 1
                  ?
                  <select value={seance1} onChange={(e) => handleChange(e)}>
                 <option value="SEM"  >SEM</option >
                  <option value="MDW"> MDW</option>
                  <option selected value="DSI">DSI</option>
                  </select>
                  :
                  <select disabled onChange={(e) => handleChange(e)}>
                    <option value="SEM"  >SEM</option >
                  <option value="MDW"> MDW</option>
                  <option selected value="DSI">DSI</option>
                  </select>
              }
            </td>
            <td>
              {
                seancenum === 1
                  ?
                  <select value={seance1} onChange={(e) => handleChange(e)}>
                  <option value="Ranim">Ranim</option>
                <option value="Samia"> Samia</option>
                <option selected value="Adnan">Adnan</option>
                  </select>
                  :
                  <select disabled onChange={(e) => handleChange(e)}>
                     <option value="Ranim">Ranim</option>
                <option value="Samia"> Samia</option>
                <option selected value="Adnan">Adnan</option>
                  </select>
              }
            </td>
            {
              seancenum === 1
                ?
                <select value={seance1}onChange={(e) => handleChange(e)}>
                   <option value="C003">C003</option>
                <option value="C002"> C002</option>
                <option selected value="C001">C001</option>
                </select>
                :
                <select disabled onChange={(e) => handleChange(e)}>
                  <option value="C003">C003</option>
                <option value="C002"> C002</option>
                <option selected value="C001">C001</option>
                </select>
            }
            <td>
              {seancenum === 1 ? <button onClick={() => seanceconfirmed()}  >confirm</button> : <button disabled  >confirm</button>}
            </td>
          </tr>
          <tr>
            <td>seance 2</td>
            <td>
              {seancenum === 2 ? 
              <select value={seance2}onChange={(e) => handleChange(e)}>
              <option value="Mi"  >Mi</option >
                  <option value="ge"> ge</option>
                  <option selected value="ds">ds</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                 <option value="Mi"  >Mi</option >
                  <option value="ge"> ge</option>
                  <option selected value="ds">ds</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 2 ?
               <select value={seance2} onChange={(e) => handleChange(e)}>
              <option value="chaima">chaima</option>
                <option value="ranim"> ranim</option>
                <option selected value="ala">ala</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                      <option value="chaima">chaima</option>
                <option value="ranim"> ranim</option>
                <option selected value="ala">ala</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 2 ?
               <select value={seance2} onChange={(e) => handleChange(e)}>
              <option value="C004">C004</option>
                <option value="C005"> C005</option>
                <option selected value="C006">C006</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                     <option value="C004">C004</option>
                <option value="C005"> C005</option>
                <option selected value="C006">C006</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 2 ? <button onClick={() => seanceconfirmed()}  >confirm</button> : <button disabled  >confirm</button>}
            </td>
          </tr>
          <tr>
            <td>seance 3</td>
            <td>
              {seancenum === 3 ?
               <select value={seance3} onChange={(e) => handleChange(e)}>
              <option value="MDW1.1"  >MDW1.1</option >
                  <option value="MDW2.2"> MDW2.2</option>
                  <option selected value="MDW3.3">MDW3.3</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                  <option value="MDW1.1"  >MDW1.1</option >
                  <option value="MDW2.2"> MDW2.2</option>
                  <option selected value="MDW3.3">MDW3.3</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 3 ? 
              <select value={seance3} onChange={(e) => handleChange(e)}>
              <option value="ons">ons</option>
                <option value="ranika"> ranika</option>
                <option selected value="maryem">maryem</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                   <option value="ons">ons</option>
                <option value="ranika"> rafika</option>
                <option selected value="maryem">maryem</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 3 ? 
              <select value={seance3} onChange={(e) => handleChange(e)}>
              <option value="C004">C004</option>
                <option value="C005"> C005</option>
                <option selected value="C006">C006</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                   <option value="C004">C004</option>
                <option value="C005"> C005</option>
                <option selected value="C006">C006</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 3 ? <button onClick={() => seanceconfirmed()}  >confirm</button> : <button disabled  >confirm</button>}

            </td>
          </tr>
          <tr>
            <td>seance 4</td>
            <td>
              {seancenum === 4 ?
               <select value={seance4} onChange={(e) => handleChange(e)}>
              <option value="GE1.2"  >GE1.2</option >
                <option value="GE2.2"> GE2.2</option>
                <option selected value="GE3.3">GE3.3</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                   <option value="GE1.2"  >GE1.2</option >
                <option value="GE2.2"> GE2.2</option>
                <option selected value="GE3.3">GE3.3</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 4 ? 
              <select value={seance4} onChange={(e) => handleChange(e)}>
              <option value="rami">rami</option>
                <option value="maha"> maha</option>
                <option selected value="sana">sana</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                 <option value="rami">rami</option>
                <option value="maha"> maha</option>
                <option selected value="sana">sana</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 4 ? 
              <select value={seance4} onChange={(e) => handleChange(e)}>
              <option value="G001">G001</option>
                <option value="G002"> G002</option>
                <option selected value="G003">G003</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                    <option value="G001">G001</option>
                <option value="G002"> G002</option>
                <option selected value="G003">G003</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 4 ? <button onClick={() => seanceconfirmed()}  >confirm</button> : <button disabled  >confirm</button>}

            </td>
          </tr>
          <tr>
            <td>seance 5</td>
            <td>
              {seancenum === 5 ? <select onChange={(e) => handleChange(e)}>
                <option value="nom_prof">nom_prof</option>
                <option value="nom_classe"> nom_classe</option>
                <option selected value="nom_salle">nom_salle</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                  <option value="nom_prof">nom_prof</option>
                  <option value="nom_classe"> nom_classe</option>
                  <option selected value="nom_salle">nom_salle</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 5 ? <select onChange={(e) => handleChange(e)}>
                <option value="nom_prof">nom_prof</option>
                <option value="nom_classe"> nom_classe</option>
                <option selected value="nom_salle">nom_salle</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                  <option value="nom_prof">nom_prof</option>
                  <option value="nom_classe"> nom_classe</option>
                  <option selected value="nom_salle">nom_salle</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 5 ? <select onChange={(e) => handleChange(e)}>
                <option value="nom_prof">nom_prof</option>
                <option value="nom_classe"> nom_classe</option>
                <option selected value="nom_salle">nom_salle</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                  <option value="nom_prof">nom_prof</option>
                  <option value="nom_classe"> nom_classe</option>
                  <option selected value="nom_salle">nom_salle</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 5 ? <button onClick={() => seanceconfirmed()}  >confirm</button> : <button disabled  >confirm</button>}

            </td>
          </tr>
          <tr>
            <td>seance 6</td>
            <td>
              {seancenum === 6 ? <select onChange={(e) => handleChange(e)}>
                <option value="nom_prof">nom_prof</option>
                <option value="nom_classe"> nom_classe</option>
                <option selected value="nom_salle">nom_salle</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                  <option value="nom_prof">nom_prof</option>
                  <option value="nom_classe"> nom_classe</option>
                  <option selected value="nom_salle">nom_salle</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 6 ? <select onChange={(e) => handleChange(e)}>
                <option value="nom_prof">nom_prof</option>
                <option value="nom_classe"> nom_classe</option>
                <option selected value="nom_salle">nom_salle</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                  <option value="nom_prof">nom_prof</option>
                  <option value="nom_classe"> nom_classe</option>
                  <option selected value="nom_salle">nom_salle</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 6 ? <select onChange={(e) => handleChange(e)}>
                <option value="nom_prof">nom_prof</option>
                <option value="nom_classe"> nom_classe</option>
                <option selected value="nom_salle">nom_salle</option>
              </select>
                :
                <select disabled onChange={(e) => handleChange(e)} >
                  <option value="nom_prof">nom_prof</option>
                  <option value="nom_classe"> nom_classe</option>
                  <option selected value="nom_salle">nom_salle</option>
                </select>
              }
            </td>
            <td>
              {seancenum === 6 ? <button onClick={() => seanceconfirmed()}  >confirm</button> : <button disabled  >confirm</button>}
            </td>
          </tr>
        </table>
      </>
    )
  }
  function callback(key) {
    console.log(key);
    setseancenum(1)
  }
  return (
    <div>
      <input type="text" placeholder="classe" value={classe} onChange={(e) => setClasse(e.target.value)} style={{ marginLeft: "25px" }} />
      <input type="text" placeholder="Année universitaire" value={annee} onChange={(e) => setanne(e.target.value)} style={{ marginLeft: "25px" }} />
      <input type="text" placeholder="Emplois de temps"style={{ marginLeft: "25px" }} />
 
      <select onChange={(e) => setsemestre(e.target.value)}>
        <option value="semestre1">Semestre 1</option>
        <option value="semestre2">Semestre 2</option>
      </select>

      <div style={{ margin: "70px" }}>
        <Tabs defaultActiveKey="1" onChange={callback} >
          <TabPane tab="lundi" key="1">
            <DayContent />
          </TabPane>
          <TabPane tab="mardi" key="2">
            <DayContent />
          </TabPane>
          <TabPane tab="mercredi" key="3">
            <DayContent />
          </TabPane>
          <TabPane tab="Jeudi" key="4">
            <DayContent />
          </TabPane>
          <TabPane tab="Vendredi" key="5">
            <DayContent />
          </TabPane>
          <TabPane tab="Samedi" key="6">
            <DayContent />
          </TabPane>
          <TabPane tab="validate" key="7">
            <button onClick={()=>valider()} >valider</button>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
export default TimeTable;
