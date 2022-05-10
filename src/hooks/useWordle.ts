import { guesseType } from './../types/types';
import { useState } from "react"

const useWordle = (solution: string) => {
    const [turn, setTurn] = useState<number>(0)
    const [currentGuess, setCurrentGuess] = useState<string>('')
    const [guesses, setGuesses] = useState<(guesseType[] | undefined)[]>([...Array(6)]) // each guess is an array
    const [history, setHistory] = useState<string[]>([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState<boolean>(false)


    // format a guess into an array of letter objects 
    // e.g. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
        const solutionArray: Array<string | null> = solution.split('')
        const formattedGuess = currentGuess.split('').map((l, index) => {
            if (solutionArray.includes(l)) {
                if (solutionArray.indexOf(l) === index) {
                    solutionArray[index] = null
                    return { key: l, color: 'green' }
                }
                solutionArray[solutionArray.indexOf(l)] = null
                return { key: l, color: 'yellow' }
            }
            return { key: l, color: 'gray' }
        })
        return formattedGuess;

    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess: guesseType[]) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses: (guesseType[] | undefined)[]) => {
            const newGuesses = [...prevGuesses]
            newGuesses[turn] = [...formattedGuess]
            return newGuesses
        })
        setTurn((prevTurn) => prevTurn + 1)
    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyup = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (currentGuess.length !== 5 || turn > 5 || history.includes(currentGuess)) {
                return
            }
            const formattedGuess = formatGuess()
            addNewGuess(formattedGuess)
            setHistory((prevHis: string[]) => {
                const newHistory = [...prevHis, currentGuess]
                return newHistory
            })
            setCurrentGuess('')
        }
        if (event.key === 'Backspace') {
            setCurrentGuess(currentGuess.slice(0, -1))
            return
        }
        if (/^[A-Za-z]$/.test(event.key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + event.key)
            }
        }
    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyup, setGuesses, setHistory, setTurn, setIsCorrect }
}

export default useWordle
