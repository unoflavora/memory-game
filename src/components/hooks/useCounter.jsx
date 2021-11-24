/* eslint-disable react-hooks/exhaustive-deps */

import {useEffect} from 'react'

function useCounter(isModalOpen, startGame, dispatch, state) {
  return (
    useEffect(() => {
        setTimeout(() => {
          if (!isModalOpen && startGame) {
            dispatch({type: 'add time', payload: state.time + 1})
          }
        }, 1000)
      }, [state.time, startGame])
  );
}

export default useCounter;