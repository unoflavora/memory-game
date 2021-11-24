/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react'

function useStart(dispatch, numbers, data, setStartGame) {
  return(
    useEffect(() => {
      dispatch({type:'setNumbers', payload:numbers})
      dispatch({type: 'openAll', payload: Array.from(Array(data.grid ** 2).keys()) })
      setTimeout(() => {
        dispatch({ type: 'closeAll' })
        setStartGame(true)
      }, 5000)
    }, [])
  )
}

export default useStart;