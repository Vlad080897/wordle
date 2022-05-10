import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import useWordle from '../hooks/useWordle'
import '../index.css'
import Grid from './Grid'
import Keypad from './Keypad'
import ModalLostGame from './ModalLostGame'
import ModalWinGame from './ModalWinGame'

const Wordle: React.FC<IWordleProps> = React.memo(({ solution, setNewCircle, newCircle }) => {
  const {
    usedKeys,
    currentGuess,
    guesses,
    turn,
    isCorrect,
    setUsedKeys,
    handleKeyup,
    setGuesses,
    setHistory,
    setTurn,
    setIsCorrect
  } = useWordle(solution)
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
    setTimeout(() => {
      setIsShown(isCorrect)
    }, 1300)
  }, [isCorrect])

  return (
    <>
      <h1 className='title'>Wordle</h1>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      {useMemo(() => <Keypad guesses={guesses} usedKeys={usedKeys} setUsedKeys={setUsedKeys} />, [guesses, usedKeys, setUsedKeys])}
      {isCorrect && isShown &&
        < ModalWinGame
          isCorrect={isCorrect}
          setGuesses={setGuesses}
          setHistory={setHistory}
          setTurn={setTurn}
          setIsCorrect={setIsCorrect}
          setNewCircle={setNewCircle}
          newCircle={newCircle}
          setUsedKeys={setUsedKeys}
        />
      }
      <ModalLostGame
        turn={turn}
        isCorrect={isCorrect}
        setGuesses={setGuesses}
        setHistory={setHistory}
        setTurn={setTurn}
        setNewCircle={setNewCircle}
        newCircle={newCircle}
        setUsedKeys={setUsedKeys} />
    </>
  )
})

export default Wordle

type IWordleProps = {
  solution: string
  newCircle: boolean
  setNewCircle: Dispatch<SetStateAction<boolean>>
}





















{/* <div>
        <>
          {guesses.map((guess, i) => {
            {
              if (guess) {
                return (
                  <div className='letters_block'>
                    {guess.map(key => {
                      return (
                        <div className='letter_block' style={{ backgroundColor: `${key.color}` }}>
                          <span >
                            {key.key}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                )
              }
              let newGuess = [...Array(5)]
              newGuess = newGuess.map(() => {
                return {
                  id: turn
                }
              })
              let rowId = document.getElementById(i.toString())?.id
              return (
                <div className='letters_block' id={i.toString()}>
                  {
                    newGuess.map((key, i) => {
                      if (key.id.toString() === rowId) {
                        return (
                          <div className='letter_block_empty'>
                            {currentGuessArray[i]}
                          </div>

                        )
                      }
                      return (
                        <div className='letter_block_empty'></div>
                      )
                    })
                  }
                </div>
              )
            }
          })
          }
        </>
      </div> */}