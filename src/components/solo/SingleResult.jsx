function SingleResult({state, setStart, handleRestart}) {
  return (
    <div className='flex flex-col gap-5 p-5 md:p-10 text-center font-atkinson'>
    <div>
      <h1 className='text-memory-darkerblue  text-2xl md:text-4xl'>You did it!</h1>
      <h2 className='text-memory-lightblue md:text-xl'>
        Game over! Here's how you got on...
      </h2>
    </div>

    <div className='flex flex-col gap-2'>
    <div className='rounded-xl p-4 flex justify-between w-full bg-memory-gray'>
        <p className='text-memory-darkblue'>Time Elapsed</p>
        <p className='text-memory-darkerblue text-xl'>{secondsToMinutes(state.time)}</p>
      </div>

      <div className='rounded-xl p-4 flex justify-between w-full bg-memory-gray'>
        <p className='text-memory-darkblue'>Moves Taken</p>
        <p className='text-memory-darkerblue text-xl'>{state.step} Moves</p>
      </div>
    </div>

    <div className='flex flex-col lg:flex-row gap-5'>
    <button onClick={handleRestart} className='py-3 rounded-full text-xl w-full text-center bg-memory-orange text-white'>
      Restart
    </button>
    <button onClick={() => setStart(false)} className='py-3 rounded-full text-xl w-full text-center bg-memory-gray text-memory-darkerblue'>
      Setup New Game
    </button>
    </div>

  </div>
   );
}

function secondsToMinutes(time){
  return Math.floor(time / 60)+':'+Math.floor(time % 60);
}


export default SingleResult;