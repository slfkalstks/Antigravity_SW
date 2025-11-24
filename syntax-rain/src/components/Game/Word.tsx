import React from 'react';
import styles from './Word.module.css';
import type { Word as WordType } from '../../utils/words';

interface WordProps {
    word: WordType;
}

const Word: React.FC<WordProps> = ({ word }) => {
    return (
        <div
            className={styles.word}
            style={{ left: `${word.x}px`, top: `${word.y}px` }}
        >
            {word.text}
        </div>
    );
};

export default Word;
