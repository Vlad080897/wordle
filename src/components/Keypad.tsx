import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import '../index.css'
import { guesseType } from '../types/types'

const Keypad: React.FC<IKeypadProps> = ({ guesses, usedKeys, setUsedKeys }) => {
  debugger;
  const [letters, setLetters] = useState<Letters[] | null>(null)

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Vlad080897/data-for-wordle/letters')
      .then(res => res.json())
      .then(json => {
        setLetters(json)
      })
  }, [])

  useEffect(() => {
    const resultObj: usedKeysType = { ...usedKeys }
    guesses.forEach(g => {
      g?.forEach(l => {
        if (l.color === 'green') {
          resultObj[l.key] = 'greenKey'
          return
        }
        if (l.color === 'yellow' && resultObj[l.key] !== 'greenKey') {
          resultObj[l.key] = 'yellowKey'
          return
        }
        if (l.color === 'gray' && !resultObj[l.key]) {
          resultObj[l.key] = 'grayKey'
        }
        setUsedKeys(resultObj)
      })

    })
  }, [guesses, setUsedKeys])

  return (
    <div className='keypad'>
      {letters && letters.map(l => {
        return (
          <div key={l.key} className={`inside ${usedKeys[l.key]}`}>
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
  usedKeys: usedKeysType
  setUsedKeys: Dispatch<SetStateAction<{}>>
}

export type usedKeysType = {
  [a: string]: string
}