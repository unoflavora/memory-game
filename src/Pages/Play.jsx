import { useReducer, useState } from "react"
import PlayBoard from "../components/Board"
import Modal from "../components/Modal"
import Navbar from "../components/Navbar"
import Footer from "../components/solo/Footer"
import SingleResult from "../components/solo/SingleResult"
import useMode from '../components/hooks/useMode'
import useStart from "../components/hooks/useStart"
import useCheck from "../components/hooks/useCheck"
import useCounter from "../components/hooks/useCounter"

function Play({settings, setStart, icons}) { 
  const [state, dispatch] = useReducer(reducer, initialState)
  const [data] = useState({grid: parseInt(settings['grid'].charAt(0)),})
  const [startGame, setStartGame] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const numbers = useMode(settings, data.grid, icons)

  useStart(dispatch, numbers, data, setStartGame)
  useCheck(state, dispatch, numbers, setStartGame, setIsModalOpen)
  useCounter(isModalOpen, startGame, dispatch, state)

  const handleRestart = () => {
    setIsModalOpen(false)
    setStartGame(false)
    dispatch({type:'restart', payload: shuffleArray(numbers)})
    dispatch({type: 'openAll', payload: Array.from(Array(data.grid ** 2).keys()) })
    setTimeout(() => {
      dispatch({ type: 'closeAll' })
      setStartGame(true)
    }, 5000)
  }

  return ( 
  <>
    <Modal isOpen={isModalOpen}>
      <SingleResult state={state} setStart={setStart} handleRestart={handleRestart}/>
    </Modal>
    
    <div className='h-screen w-screen flex justify-center'>
      <div className='w-full max-w-screen-lg px-5 py-5 font-atkinson flex flex-col justify-between h-screen'>
        <Navbar setStart={setStart} startGame={startGame} handleRestart={handleRestart}/>
        <PlayBoard
          numbers ={numbers} data={data} state={state} startGame={startGame} 
          dispatch={dispatch}
        />
        <Footer state={state}/>          
      </div>
    </div>
  </>
  )
}

const initialState = {
  open: [],
  openCorrect: [],
  step: 0,
  numbers: [],
  time:0
}
  
const shuffleArray = ((array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
})

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
    
    case 'check':
      if(state.numbers[state.open[0]] === state.numbers[state.open[1]]) {
        const newOpenCorrect = [...state['openCorrect'], state.open[0], state.open[1]]
        return {...state, open: [], openCorrect: newOpenCorrect}
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
        numbers: action.payload,
        time:0
      }

    case 'openAll':
      return {...state, openCorrect: action.payload}

    case 'closeAll':
      return {...state, openCorrect: []}

    default:
      return null
  }
} 

export default Play;