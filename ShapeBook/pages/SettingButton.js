import React, { useState } from 'react';
import styles from '../styles/SettingButton.module.css'; // Assicurati che il percorso sia corretto

function SettingButton({ onVolumeChange }) {
    const [showSettings, setShowSettings] = useState(false);
    const [volume, setVolume] = useState(1); // Volume iniziale al massimo

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        onVolumeChange(newVolume); // Chiama la callback con il nuovo volume
    };

    return (
        <>
            <button className={styles.settingButton} onClick={() => setShowSettings(!showSettings)}></button>

            {showSettings && (
                <div className={styles.settingsPanel}>
                    <label htmlFor="volumeControl">Volume:</label>
                    <input
                        type="range"
                        id="volumeControl"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                </div>
            )}
        </>
    );
}

export default SettingButton;
