import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Assicurati di importare Link da 'next/link'
import styles from '../styles/MyPage.module.css'; // Assicurati che il percorso del file CSS sia corretto
import SettingButton from './SettingButton';

const IntroPage = () => {
  const audioRef = useRef(null);
    const [volume, setVolume] = useState(1);

    const handleVolumeChange = (newVolume) => {
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
        setVolume(newVolume);
    };

  return (
    <div className={styles.container}>
       <audio ref={audioRef} src="../public/giocacazzo.aac" preload="auto" />
        <SettingButton onVolumeChange={handleVolumeChange} />
      <div className={styles.imageWrapper}>
        <Image
          src="/Images/5C_Rosettaaggiustalacorona.png" // Assicurati che il percorso sia corretto. In Next.js, i percorsi delle immagini iniziano dalla cartella 'public'
          alt="Descrizione dell'immagine"
          layout="responsive"
          objectFit="contain"
          width={100}  // Questi valori sono puramente simbolici
          height={50}  // per mantenere il rapporto 2:1 (larghezza:altezza)
        />
      </div >
      <div className={styles.textBlock}>
        <p>
          C'era una volta, in un regno ricco di fiumi e verde di boschi, 
          un grande castello di Zucchero e Glassa. La regina, una strega buona e potente, 
          governava con giustizia.
        </p>
      </div>
      <div className={styles.button}>
      <Link href="/prossimaPagina"> bottone
        <div className={styles.textButton} />
      </Link>
      </div>
    </div>
  );
};

export default IntroPage;
