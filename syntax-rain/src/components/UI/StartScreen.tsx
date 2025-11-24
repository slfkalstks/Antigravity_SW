import React from 'react';

interface StartScreenProps {
    onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            textAlign: 'center', color: '#00ff41', zIndex: 30, backgroundColor: 'rgba(0,0,0,0.9)', padding: '2rem', border: '1px solid #00ff41'
        }}>
            <h1>SYNTAX RAIN</h1>
            <p>Type the falling keywords!</p>
            <button onClick={onStart} style={{ padding: '10px 20px', fontSize: '1.2rem', background: '#00ff41', color: 'black', border: 'none', marginTop: '1rem' }}>GAME START</button>
        </div>
    );
};

export default StartScreen;
