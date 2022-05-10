import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Dispatch, SetStateAction } from 'react';
import { modalStyle } from '../styles/styles';
import { guesseType } from '../types/types';

const ModalLostGame: React.FC<IModalLostGame> = ({ isCorrect, turn, setGuesses, setHistory, setTurn, newCircle, setNewCircle, setUsedKeys }) => {
    const handleClose = () => {
        setGuesses([...Array(6)]);
        setHistory([]);
        setTurn(0);
        setNewCircle(!newCircle)
        setUsedKeys({})
    }

    return (
        <>
            <Modal
                open={turn === 6 && !isCorrect ? true : false}
                onClose={handleClose}
            >
                <Box sx={modalStyle}>
                    <Typography>
                        Sorry! Maybe next time!
                    </Typography>
                </Box>
            </Modal>
        </>

    )
}

export default ModalLostGame

type IModalLostGame = {
    turn: number
    isCorrect: boolean
    newCircle: boolean
    setGuesses: Dispatch<SetStateAction<(guesseType[] | undefined)[]>>
    setHistory: Dispatch<SetStateAction<string[]>>
    setTurn: Dispatch<SetStateAction<number>>
    setNewCircle: Dispatch<SetStateAction<boolean>>
    setUsedKeys: Dispatch<SetStateAction<{}>>
}