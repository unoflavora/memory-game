function PlayBoard({numbers, data, state, startGame, dispatch}) {
  const size = data.grid === 6 ? 'h-10 w-10 md:h-16 md:w-16' : 'h-14 w-14 md:h-24 md:w-24'
  return (
    <div className={`grid ${data.grid === 4 ? 'grid-cols-4 grid-rows-4' : 'grid-cols-6 grid-rows-6'} place-items-center gap-4`}>
      {numbers.map((num, i) => 
        <button
          disabled={!startGame}
          onClick={() => dispatch({type:'open', payload:i})} 
          key={i}
          className={`${size} text-xl md:text-4xl font-atkinson flex justify-center items-center  rounded-full text-white
          ${state.openCorrect.includes(i) ? 'bg-memory-darkblue' : state.open.includes(i) ? 'bg-memory-orange' : 'bg-memory-black'} `}>
            <p className={`${state.openCorrect.includes(i) ? 'block' : state.open.includes(i) ? 'block' : 'hidden'}`}>{num}</p>
        </button>
    )}
  </div>
  );
}

export default PlayBoard;