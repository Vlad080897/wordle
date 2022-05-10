import React, { useEffect, useState } from 'react'
import '../index.css'

const NextRow: React.FC<INextRowType> = ({ turn, iteration, currentGuess }) => {
  const [currentGuessArray, setCurrentGuessArray] = useState<string[]>([])
  let newGuess = [...Array(5)]
  newGuess = newGuess.map(() => {
    return {
      id: turn
    }
  })
  let rowId = document.getElementById(iteration.toString())?.id

  useEffect(() => {
    setCurrentGuessArray(currentGuess.split(''))
  }, [currentGuess, setCurrentGuessArray])
  return (
    <div className='letters_block' id={iteration.toString()}>
      {
        newGuess.map((el, i) => {
          if (el.id.toString() === rowId && currentGuessArray.length > i) {
            return (
              <div key={i} className='letter_block_empty bounce'>
                <div >{currentGuessArray[i]}</div>
              </div>
            )
          }
          return (
            <div key={i} className='letter_block_empty'></div>
          )
        })
      }
    </div>
  )
}

export default NextRow

type INextRowType = {
  turn: number
  iteration: number
  currentGuess: string
}