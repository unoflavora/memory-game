/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react'

function Mode(settings, grid, icons) {
  let arrayLength = 8
  if (grid === 6) {
    arrayLength = 18
  }

  const numbers = useMemo(() => shuffleArray([...Array.from({length: arrayLength}, (_, i) => i + 1), 
    ...Array.from({length: arrayLength}, (_, i) => i + 1)]), [])
  
  const sliced = icons.slice(0, arrayLength)
  let icon = useMemo(() => shuffleArray([...sliced, ...sliced]), [])

  if (settings.theme === 'Icons') {
    return icon
  } else {
    return numbers
  }

}

const shuffleArray = ((array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
})

export default Mode;