import { useReducer } from "react"
const reducer = (state, action) => {
  switch (action.type) {
    case 'theme':
      return {...state, theme: action.payload}
    case 'players':
      return {...state, players: action.payload}
    case 'grid':
      return {...state, grid: action.payload}
    default:
      return null
  }
}

const initialSettings = {
  theme: 'Numbers',
  players: '1',
  grid: '4x4'
}

const Start = ({setStart, setGameSettings}) => {
  const [settings, dispatch] = useReducer(reducer, initialSettings)
  
  const Button = ({children, type, bg='bg-memory-lightblue hover:bg-memory-softblue', color='text-white'}) => {
  
    const handleClick = type !== 'submit' 
    ? () => dispatch({type:type, payload:children.trim()})
    : () => handleSubmit()

    return(
      <button 
        onClick={handleClick}
        className={`rounded-full py-2 w-full 
                  ${color} text-2xl
                  ${settings[type] === children.trim() ? 'bg-memory-darkerblue': bg}`}
      >
        {children}
      </button>
    )
  }
  
  const SubTitle = ({children}) => {
    return(
    <h2 className='text-2xl text-memory-darkblue'>
      {children}
    </h2>
    )
  }
  
  const Unit = ({children}) => {
    return(
    <div className='flex flex-col justify-center px-5 gap-1 md:gap-4'> 
    {children}
    </div>
    )
  }

  const handleSubmit = () => {
    setGameSettings(settings)
    setStart(true)
  }


  
  return(
    <div className='font-atkinson px-6 flex flex-col 
          h-screen justify-center items-center bg-memory-black gap-14
          md:px-14 xl:px-96'>
      <h1 className='text-white text-5xl'>memory</h1>
    
      <div className='bg-memory-white w-full max-w-screen-sm rounded-2xl py-5 flex flex-col gap-7
        md:py-14 md:px-14'>

        <Unit> 
          <SubTitle> Select Theme </SubTitle>
          <div className='flex justify-between gap-3 md:gap-7'>
            <Button type='theme'> Numbers </Button>
            <Button type='theme'> Icons </Button>
          </div>
        </Unit>

        <Unit> 
          <SubTitle> Number of Players </SubTitle>
          <div className='flex justify-between gap-3 md:gap-7'>
            <Button type='players'> 1 </Button>
            <Button type='players'> 2 </Button>
            <Button type='players'> 3 </Button>
            <Button type='players'> 4 </Button>
          </div>
        </Unit>

        <Unit> 
          <SubTitle> Grid Size </SubTitle>
          <div className='flex justify-between gap-3 md:gap-7'>
            <Button type='grid'> 4x4 </Button>
            <Button type='grid'> 6x6 </Button>
          </div>
        </Unit>

        <div className='px-5'>
          <Button type='submit' bg={'bg-memory-orange hover:bg-memory-lightorange'}>Start Game</Button>
        </div>
      </div>
    </div>
    ) 
  }


export default Start