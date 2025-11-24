import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './Game.module.css';
import { WORD_LIST } from '../../utils/words';
import type { Word as WordType } from '../../utils/words';
import Word from './Word';
import { useGameLoop } from '../../hooks/useGameLoop';
import StartScreen from '../UI/StartScreen';
import GameOverScreen from '../UI/GameOverScreen';

const Game: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [words, setWords] = useState<WordType[]>([]);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isDamaged, setIsDamaged] = useState(false);
    const [isError, setIsError] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    // Game configuration
    const spawnRate = 1000; // ms
    const fallSpeed = 0.1; // pixels per ms

    const lastSpawnTime = useRef<number>(0);

    const startGame = () => {
        setWords([]);
        setScore(0);
        setLives(3);
        setInputValue('');
        setIsPlaying(true);
        setIsGameOver(false);
        setIsDamaged(false);
        setIsError(false);
        lastSpawnTime.current = 0;
        inputRef.current?.focus();
    };

    const spawnWord = () => {
        const text = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
        const x = Math.random() * (window.innerWidth - 150) + 50; // Padding
        const newWord: WordType = {
            id: Date.now(),
            text,
            x,
            y: -50 // Start above screen
        };
        setWords(prev => [...prev, newWord]);
    };

    const triggerDamage = useCallback(() => {
        setIsDamaged(true);
        setTimeout(() => setIsDamaged(false), 200);
    }, []);

    const triggerError = useCallback(() => {
        setIsError(true);
        setTimeout(() => setIsError(false), 300);
    }, []);

    const gameLoop = useCallback((deltaTime: number) => {
        // Spawning
        lastSpawnTime.current += deltaTime;
        if (lastSpawnTime.current > spawnRate) {
            spawnWord();
            lastSpawnTime.current = 0;
        }

        // Falling & Collision
        setWords(prevWords => {
            const nextWords: WordType[] = [];
            let livesLost = 0;

            prevWords.forEach(word => {
                const nextY = word.y + fallSpeed * deltaTime;
                if (nextY > window.innerHeight - 50) { // Hit bottom
                    livesLost++;
                } else {
                    nextWords.push({ ...word, y: nextY });
                }
            });

            if (livesLost > 0) {
                triggerDamage();
                setLives(prev => {
                    const newLives = prev - livesLost;
                    if (newLives <= 0) {
                        setIsPlaying(false);
                        setIsGameOver(true);
                        return 0;
                    }
                    return newLives;
                });
            }

            return nextWords;
        });
    }, [triggerDamage]);

    useGameLoop(gameLoop, isPlaying);

    // Focus management
    useEffect(() => {
        if (isPlaying) {
            inputRef.current?.focus();
        }
    }, [isPlaying]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        // Check for match (case-insensitive and trimmed)
        const normalizedInput = value.trim().toLowerCase();

        if (words.some(word => word.text.toLowerCase() === normalizedInput)) {
            setWords(prev => prev.filter(word => word.text.toLowerCase() !== normalizedInput));
            setScore(prev => prev + 10);
            setInputValue('');
            setIsError(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (inputValue.trim() !== '') {
                // If we are here, it means the word didn't match (because match clears input immediately)
                // So this is an incorrect submission or just clearing
                triggerError();
                setInputValue('');
            }
        }
    };

    return (
        <div
            className={`${styles.gameContainer} ${isDamaged ? styles.damage : ''}`}
            onClick={() => inputRef.current?.focus()}
        >
            {/* HUD */}
            <div style={{
                position: 'absolute',
                top: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#00ff41',
                zIndex: 20,
                fontSize: '2rem',
                textAlign: 'center',
                textShadow: '0 0 10px #00ff41'
            }}>
                <div>Score: {score}</div>
                <div>Lives: {'♥'.repeat(lives)}</div>
            </div>

            {/* Start / Game Over Screens */}
            {!isPlaying && !isGameOver && (
                <StartScreen onStart={startGame} />
            )}

            {isGameOver && (
                <GameOverScreen score={score} onRetry={startGame} />
            )}

            <div className={styles.playArea}>
                {words.map(word => (
                    <Word key={word.id} word={word} />
                ))}
            </div>

            <div className={styles.inputArea}>
                <input
                    ref={inputRef}
                    type="text"
                    className={`${styles.input} ${isError ? styles.error : ''}`}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={isPlaying ? "Type here..." : ""}
                    autoFocus
                    onBlur={() => isPlaying && inputRef.current?.focus()}
                />
            </div>
        </div>
    );
};

export default Game;
