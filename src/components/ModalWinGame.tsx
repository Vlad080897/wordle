import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Dispatch, SetStateAction } from 'react';
import { guesseType } from '../types/types';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFFF',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalWinGame: React.FC<IModalWinGameType> = ({ isCorrect, setGuesses, setHistory, setTurn, setIsCorrect, setNewCircle, newCircle }) => {
  const [open, setOpen] = React.useState(isCorrect);
  const handleClose = () => {
    setOpen(!open);
    setGuesses([...Array(6)]);
    setHistory([]);
    setTurn(0);
    setIsCorrect(false);
    setNewCircle(!newCircle)

  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
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
}