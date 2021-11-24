/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer, useState } from "react"
import Modal from "../components/Modal"
import PlayBoard from "../components/Board"
import Footer from "../components/multiplay/Footer"
import Navbar from "../components/Navbar"
import Result from "../components/multiplay/Result"
import useMode from '../components/hooks/useMode'

function MultiPlay({settings, setStart, icons}) { 
  const [data] = useState({
    grid: parseInt(settings['grid'].charAt(0)),
    players: parseInt(settings.players)
  })
  const [state, dispatch] = useReducer(reducer, initialState)
  const [startGame, setStartGame] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [playingPlayer, setPlayingPlayer] = useState(1)

  const numbers = useMode(settings, data.grid, icons)
  
  const playersScores = {}
  for (let i = 1; i <= data.players; i++){
    playersScores[i] = 0
  }


  useEffect(() => {
    dispatch({type:'setNumbers', payload:numbers})
    dispatch({type: 'openAll', payload: Array.from(Array(data.grid ** 2).keys()) })
    dispatch({type:'start score', payload: playersScores})
    setTimeout(() => {
      dispatch({ type: 'closeAll' })
      setStartGame(true)
    }, 5000)
  }, [])


  useEffect(() => {
    if(state.open.length === 2) { // 1 step
      setTimeout(() => {
        dispatch({type: 'check', payload:{ player: playingPlayer }})
        let nextPlayer = (playingPlayer + 1) % data.players
        if (nextPlayer === 0) {
          nextPlayer = data.players
        }
        dispatch({type: 'sort'})
        setPlayingPlayer(nextPlayer)
      }, 500)
    }
    if(state.openCorrect.length === numbers.length && startGame) {
      setStartGame(false)
      setIsModalOpen(true)
    }  
  }, [state])

  const handleRestart = () => {
    setIsModalOpen(false)
    setStartGame(false)
    dispatch({type:'restart', payload: {numbers: shuffleArray(numbers), players:playersScores}})
    dispatch({type: 'openAll', payload: Array.from(Array(data.grid ** 2).keys()) })
    setPlayingPlayer(1)
    setTimeout(() => {
      dispatch({ type: 'closeAll' })
      setStartGame(true)
    }, 5000)
  }

  return ( 
  <>
    <Modal isOpen={isModalOpen}>
      <Result state={state} handleRestart={handleRestart} setStart={setStart}/>
    </Modal>
    

    <div className='h-screen w-screen flex justify-center'>
      <div className='w-full max-w-screen-lg px-5 py-5 font-atkinson flex flex-col justify-between h-full '>
      <Navbar setStart={setStart} startGame={startGame} handleRestart={handleRestart}/>
      <PlayBoard
              numbers ={numbers} data={data} state={state} startGame={startGame} 
              dispatch={dispatch}
            />
      <Footer data={data} playingPlayer={playingPlayer} state={state}/>
      </div>
    </div>
  </>
  )
}



const reducer = (state, action) => {
  switch(action.type) {
    case 'open':
      if(state.open.length < 2) {
        if(action.payload !== state.open[0]) {
          return {...state, open: [...state['open'], action.payload]}  
        } else {
          return state
        }
      } else {
        return state
      }    

    case 'setNumbers':
      return {...state, numbers: action.payload}
    
    case 'add time':
      return {...state, time:action.payload}

    case 'addPoint':
      const newPlayerPoints = {...state['players']}
      newPlayerPoints[action.payload]++
      return {...state, players: newPlayerPoints}
    
    case 'check':
      if(state.numbers[state.open[1]] === state.numbers[state.open[0]]) {
        console.log('checking....')
        const newOpenCorrect = [...state['openCorrect'], state.open[0], state.open[1]]
        const newPlayerPoints = {...state['playerScore']}
        newPlayerPoints[action.payload.player] = newPlayerPoints[action.payload.player] ? newPlayerPoints[action.payload.player] + 1 : 1
        return {...state, open: [], openCorrect: newOpenCorrect, playerScore:newPlayerPoints}
      } else {
        return {...state, open: []}
      }
    
    case 'addStep':
      const newStep = state.step + 1
      return {...state, step: newStep}

    case 'restart':
      return {  
        open: [],
        openCorrect: [],
        step: 0,
        numbers: action.payload.numbers,
        playerScore: action.payload.players,
        playerScoreSorted: false
      }
    
    case 'sort': 
      const sorted = Object.entries(state.playerScore)
        .sort(([,a],[,b]) => b-a)
      return {...state, playerScoreSorted:sorted}


    case 'start score':
      return {...state, playerScore: action.payload}

    case 'openAll':
      return {...state, openCorrect: action.payload}

    case 'closeAll':
      return {...state, openCorrect: []}

    default:
      return null
  }
} 

const initialState = {
  open: [],
  openCorrect: [],
  step: 0,
  numbers: [],
  playerScore: {}
}
  
const shuffleArray = ((array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
})




export default MultiPlay;