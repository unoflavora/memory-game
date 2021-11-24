function Footer({state}) {
  const styles = {
    'status' : 'w-full bg-memory-lightblue text-center py-3 xl:py-2 xl:flex xl:justify-between xl:px-5 rounded-xl'
  }

  return ( 
    <div className={`flex w-full justify-between gap-4`}>
    <div className={styles.status}>
      <h2 className='text-memory-darkblue text-lg xl:text-2xl'>Time</h2>
      <h3 className='text-memory-darkerblue text-xl  xl:text-2xl'>{secondsToMinutes(state.time)}</h3>
    </div>    
    <div className={styles.status}>
      <h2 className='text-memory-darkblue text-lg xl:text-2xl'>Moves</h2>
      <h3 className='text-memory-darkerblue text-xl xl:text-2xl'>{state.step}</h3>
    </div>    
  </div>
  );
}

function secondsToMinutes(time){
  return Math.floor(time / 60)+':'+Math.floor(time % 60);
}


export default Footer;