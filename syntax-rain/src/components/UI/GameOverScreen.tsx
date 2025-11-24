import React from 'react';

interface GameOverScreenProps {
    score: number;
    onRetry: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, onRetry }) => {
    return (
        <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            textAlign: 'center', color: '#00ff41', zIndex: 30, backgroundColor: 'rgba(0,0,0,0.9)', padding: '2rem', border: '1px solid #00ff41'
        }}>
            <h1>GAME OVER</h1>
            <p>Final Score: {score}</p>
            <button onClick={onRetry} style={{ padding: '10px 20px', fontSize: '1.2rem', background: '#00ff41', color: 'black', border: 'none', marginTop: '1rem' }}>RETRY</button>
        </div>
    );
};

export default GameOverScreen;
