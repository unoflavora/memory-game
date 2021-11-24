function Footer({data, playingPlayer, state}) {
  return (
    <div className={`flex  justify-between gap-4`}>
      {Array.from({length: data.players}, (_, i) => i + 1).map((player) => 
        <div className={`${styles.status} ${playingPlayer === player ? 'bg-memory-orange' : 'bg-memory-lightblue'}`}>
          <h2 className={`text-xl ${playingPlayer === player ? 'text-white' : 'text-memory-darkblue'}`}>P{player}</h2>
          <h3 className={`text-2xl ${playingPlayer === player ? 'text-white' : 'text-memory-darkerblue'}`}>{state.playerScore? player in state.playerScore ? state.playerScore[player] : 0 : 0}</h3>
        </div> 
      )}
    </div>
  );
}

const styles = {
  'status' : 'w-full text-center py-3 rounded-xl'
}

export default Footer