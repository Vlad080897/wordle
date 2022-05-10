import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Dispatch, SetStateAction } from 'react';
import { modalStyle } from '../styles/styles';
import { guesseType } from '../types/types';

const ModalWinGame: React.FC<IModalWinGameType> = ({ isCorrect, setGuesses, setHistory, setTurn, setIsCorrect, setNewCircle, setUsedKeys, newCircle }) => {
  const [open, setOpen] = React.useState(isCorrect);
  const handleClose = () => {
    setOpen(!open);
    setGuesses([...Array(6)]);
    setHistory([]);
    setTurn(0);
    setIsCorrect(false);
    setNewCircle(!newCircle)
    setUsedKeys({})
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Typography>
            Congratulations! You won!
          </Typography>
        </Box>

      </Modal>
    </>
  )
}

export default ModalWinGame

type IModalWinGameType = {
  isCorrect: boolean
  newCircle: boolean
  setGuesses: Dispatch<SetStateAction<(guesseType[] | undefined)[]>>
  setHistory: Dispatch<SetStateAction<string[]>>
  setTurn: Dispatch<SetStateAction<number>>
  setIsCorrect: Dispatch<SetStateAction<boolean>>
  setNewCircle: Dispatch<SetStateAction<boolean>>
  setUsedKeys: Dispatch<SetStateAction<{}>>
}