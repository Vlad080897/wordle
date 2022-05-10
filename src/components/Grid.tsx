import React from 'react'
import { guesseType } from '../types/types'
import NextRow from './NextRow'
import Row from './Row'


const Grid: React.FC<IGridProps> = ({ guesses, currentGuess, turn }) => {
  return (
    <>
      {
        guesses.map((guess, index) => {
          if (guess) {
            return (
              <Row key={index} guess={guess} />
            )
          }
          return (
            <NextRow key={index} turn={turn} iteration={index} currentGuess={currentGuess} />
          )
        })
      }
    </>
  )
}

export default Grid

type IGridProps = {
  guesses: (guesseType[] | undefined)[]
  currentGuess: string
  turn: number
}