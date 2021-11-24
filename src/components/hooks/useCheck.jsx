/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";

function useCheck(state, dispatch, numbers, setStartGame, setIsModalOpen) {
  return (
    useEffect(() => {
      if(state.open.length === 2) {
        setTimeout(() => {
          dispatch({type: 'check'})
          dispatch({type: 'addStep'})
        }, 500)
      }
  
      if(state.openCorrect.length === numbers.length && state.step > 1) {
        setStartGame(false)
        setIsModalOpen(true)
      }  
    }, [state.open])
  );
}

export default useCheck;