function Result({state, handleRestart, setStart}) {
  return (
    <div className='flex flex-col gap-5 p-5 text-center font-atkinson'>
    <div>
      <h1 className='text-memory-darkerblue  text-2xl'>
        { state.playerScoreSorted ? state.playerScoreSorted[1][1] === state.playerScoreSorted[0][1] ? "It's a tie!" : `Player ${state.playerScoreSorted[0][0]} Wins!` : null}</h1>
      <h2 className='text-memory-lightblue'>
        Game over! Here are the results...
      </h2>
    </div>

    <div className='flex flex-col gap-2'>
      {state.playerScoreSorted ? state.playerScoreSorted
      .map((playerScore, index) => {
        const [player, score] = playerScore
        const win = score === state.playerScoreSorted[0][1]
        return(
          <div className={`rounded-xl p-4 flex justify-between w-full ${win ? 'bg-memory-black': 'bg-memory-gray'}`}>
            <p className={`${win ? 'text-white' : 'text-memory-darkblue'}`}>Player {player} {win ? '(Winner!)' : null} </p>
            <p className={`${win ? 'text-white' : 'text-memory-darkblue'} text-xl`}>{score} Pairs</p>
          </div>
        )
      }) : null}
      </div>


    <button onClick={handleRestart} className='py-3 rounded-full text-xl w-full text-center bg-memory-orange text-white'>
      Restart
    </button>
    <button onClick={() => setStart(false)} className='py-3 rounded-full text-xl w-full text-center bg-memory-gray text-memory-darkerblue'>
      Setup New Game
    </button>
  </div>
  );
}

export default Result;