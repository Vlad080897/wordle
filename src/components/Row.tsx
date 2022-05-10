import React from 'react'
import { guesseType } from '../types/types'
import '../index.css'

const Row: React.FC<IRowProps> = ({ guess }) => {
  return (
    <div className='letters_block'>
      {guess?.map(g => {
        return (
          <div className={`letter_block ${g.color}`} >
            <span >
              {g.key}
            </span>
          </div>
        )
      })}
    </div >
  )
}

export default Row

type IRowProps = {
  guess: guesseType[] | undefined
}