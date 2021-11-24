import { useState } from "react";
import Start from "./Pages/Start";
import Play from './Pages/Play'
import MultiPlay from "./Pages/MultiPlay";
import {FaCar, FaSnowflake, FaFlask, FaVolleyballBall, FaAnchor, FaSun,
  FaMoon, FaHandPaper, FaBug, FaLiraSign, FaDeskpro, FaAppleAlt,
  FaBeer, FaBriefcaseMedical, FaBuilding, FaCoins, FaDatabase, FaStickerMule } from 'react-icons/fa'

function App() {
  const [start, setStart] = useState(false)
  const [settings, setSettings] = useState({})
  if(start) {
    if(parseInt(settings.players) > 1) {
      return (
        <MultiPlay setStart={setStart} settings={settings} icons={icons}/>
      )
    } else {
      return(
        <Play setStart={setStart} settings={settings} icons={icons}/>
      )
    }  
  } else {
      return (
        <Start setStart={setStart} setGameSettings={setSettings}/>
      )
    }
}

const icons = [
  <FaCar/>, <FaSnowflake/>, <FaFlask/>, <FaVolleyballBall/>, <FaAnchor/>, <FaSun/>,
      <FaMoon/>, <FaHandPaper/>, <FaBug/>, <FaLiraSign/>, <FaDeskpro/>, <FaAppleAlt/>,
      <FaBeer/>, <FaBriefcaseMedical/>, <FaBuilding/>, <FaCoins/>, <FaDatabase/>, <FaStickerMule/>
]


export default App;
