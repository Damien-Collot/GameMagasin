import './App.css';

import { InputText } from 'primereact/inputtext';
import img from './images/Logo_GameMagasin.png';
import { RadioButton } from 'primereact/radiobutton';
import React, { useEffect, useState } from 'react';



import { InformationGames } from './components/Home/home.js'
import { getAllGames, getGameByName, getGameByGenre, getGameByPlatform } from './services/fetchData';


function Catalogue() {

  const [games, setGames] = useState([]);
  const [nameGame, setNameGame] = useState('');
  const [filter, setFilter] = useState({ genre: false, platform: false });
  const [namefilter, setNameFilter] = useState('');


  //React ne gère pas les promesse, nous devons passer par une chaine de caractère, cela nous permet de mettre à jour les informations ainsi que de questionner qu'une seule fois la base de donnée
useEffect(() => {

  console.log(namefilter)
  if (!nameGame && !filter.genre && !filter.platform) {
    getAllGames().then(data => {
      setGames(data);
    });
  } else if (nameGame) {
    getGameByName(nameGame).then(data => {
      setGames(data);
    });
    console.log(games)
  } else if (filter.genre) {
    getGameByGenre(namefilter).then(data => {
      setGames(data);
    });
    console.log(games)
  } else if (filter.platform) {
    getGameByPlatform(namefilter).then(data => {
      setGames(data);
    });
    console.log(games)
  }
}, [nameGame, filter, namefilter]);



  return (
  
    <div>

    <div style={{ display: 'flex', textAlign: 'center', alignContent: 'center'}}>
      <img src={img} style={{maxwith: '100%'}} alt="Image Text" className='game-image'/>
    </div>

    <div className='FilterBar'>
      <p>PLATFROM</p>

      <div>
        <RadioButton
          value="XBox"
          onChange={() => {
            setFilter({ genre: false, platform: true })
            setNameFilter('Xbox')
          }
        }
        checked={namefilter === "Xbox"}
        />
        <label htmlFor="rb2">Xbox</label>
      </div>

      <div>
        <RadioButton
          value="Nintendo"
          onChange={() => {
            setFilter({ genre: false, platform: true })
            setNameFilter('Nintendo')
          }
        }
        checked={namefilter === "Nintendo"}
        />
        <label htmlFor="rb3">Nintendo</label>
      </div>

      <br></br>
      <p>GENRE</p>
      <div>
        <RadioButton
          value="Action"
          onChange={() =>{
          setFilter({ genre: true, platform: false })
          setNameFilter('Action') 
          }
        }
        checked={namefilter === "Action"}
        />
        <label htmlFor="rb2">Action</label>
      </div>

      <div>
        <RadioButton
          value="Infiltration"
          onChange={() =>{
          setFilter({ genre: true, platform: false })
          setNameFilter('Infiltration') 
          }
        }
        checked={namefilter === "Infiltration"}
        />
        <label htmlFor="rb2">Infiltration</label>
      </div>

      <br></br>
      <div>
        <RadioButton
          value="None"
          onChange={() => setFilter({ genre: false, platform: false })}
        />
        <label htmlFor="None">None</label>
      </div>
    </div>



    <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
      <InputText value={nameGame} onChange={(e) => setNameGame(e.target.value)} placeholder="Search"/>
    </div> 
      
    <ul>
      <InformationGames data={games} />
    </ul>        

    </div>
    
  );
}

export default Catalogue;
