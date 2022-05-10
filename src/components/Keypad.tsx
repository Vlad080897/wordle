import React, { useEffect, useState } from 'react'
import '../index.css'
import { guesseType } from '../types/types'

const Keypad: React.FC<IKeypadProps> = ({ guesses }) => {
  const getColor = (l: string) => {
    let result = null
    if (guesses) {
      guesses.forEach(g => {
        g?.forEach(key => {
          if (key.key === l) {
            result = `${key.color}Key`
          }
        })
      })
    }
    return result ? result : 'gray'

  }
  const [letters, setLetters] = useState<Letters[] | null>(null)

  useEffect(() => {
    fetch('http://localhost:3001/letters')
      .then(res => res.json())
      .then(json => {
        setLetters(json)
      })
  }, [])
  return (
    <div className='keypad'>
      {letters && letters.map(l => {
        return (
          <div key={l.key} className={`inside ${getColor(l.key)}`}>
            {l.key}
          </div>
        )
      })}
    </div>
  )
}

export default Keypad

type Letters = {
  key: string

}

type IKeypadProps = {
  guesses: (guesseType[] | undefined)[]
}