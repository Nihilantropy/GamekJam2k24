import { useAppContext } from '@/contexts/AppContext';
import { useState, useEffect} from 'react';
import { Howl } from 'howler';
import RulesButton from './RulesButton';
import styles from '../styles/Rules.module.css';


const backgroundPlayerImages = [
  'url("/selectplayericons/IG_Player-1-BG.svg")',
  'url("/selectplayericons/IG_Player-2-BG.svg")',
  'url("/selectplayericons/IG_Player-3-BG.svg")',
  'url("/selectplayericons/IG_Player-4-BG.svg")',
  'url("/selectplayericons/IG_Player-5-BG.svg")',
  'url("/selectplayericons/IG_Player-6-BG.svg")',
];

const backgroundPenImages = [
  'url("/selectplayericons/IG_Player-1-Pen.svg")',
  'url("/selectplayericons/IG_Player-2-Pen.svg")',
  'url("/selectplayericons/IG_Player-3-Pen.svg")',
  'url("/selectplayericons/IG_Player-4-Pen.svg")',
  'url("/selectplayericons/IG_Player-5-Pen.svg")',
  'url("/selectplayericons/IG_Player-6-Pen.svg")',
];



export default function Home() {
  const { players, updateString, addPlayer, removePlayer } = useAppContext();
  const [validationError, setValidationError] = useState(false);

  const handleInputChange = (index, event) => {
    const newValue = event.target.value;
    updateString(index, newValue);
  };

  const playButtonHandler = () => {
    const filledPlayers = players.filter(player => player.trim() !== '');
    if (filledPlayers.length < 3) {
      setValidationError(true);
    } else {
      setValidationError(false);
      // Naviga alla pagina successiva programmatticamente
      window.location.href = './StoryPages/StoryPage_1/1a';
    }
  };

  useEffect(() => {
    const sound = new Howl({
      src: ['/giocacazzo.aac'],
      autoplay: true,
      loop: true,
      volume: 1.0,
    });

    return () => {
      sound.unload();
    };
  }, []);

  return (
    <main className="text-5xl flex items-center justify-center w-screen h-screen">
      <div className='boxStyle'>
        <div className='flex flex-row w-full justify-end'>
          <div className={styles.buttonContainer}>
            <RulesButton className={styles.RulesButton}/>
          </div>
        </div>
        <div className='iscrizionegiocatori'>
          {/* Rimuovi il background-image e fai scroll se necessario */}
        </div>
        <div className='players-container'>
          {players.map((str, index) => (
            <div key={index} className="playerBox bg-no-repeat">
              <div className='penImage' style={{ background: backgroundPenImages[index] }}></div>
              <label>
                <input
                  type="text"
                  value={str}
                  onChange={(event) => handleInputChange(index, event)}
                  className={`w-full ${validationError ? 'error' : ''}`}
                  style={{
                    background: 'transparent',
                    backgroundImage: backgroundPlayerImages[index],
                    backgroundSize: "cover",
                    border: 'transparent',
                    borderBottom: '1px solid #ccc',
                    borderRadius: '0',
                    padding: '5px',
                    marginTop: '5px',
                    paddingLeft: '50px',
                  }}
                />
              </label>
            </div>
          ))}
        </div>
        {validationError && <p style={{ fontSize: '0.65em' }} className={`text-red-500 ${validationError ? 'error-message' : ''}`}>Almeno tre giocatori devono essere inseriti.</p>}
        <div className='addorremovepg'>
          <button onClick={addPlayer}>+</button>
          <button onClick={removePlayer}>-</button>
        </div>
        <button className='play-button' onClick={playButtonHandler}></button>
      </div>
      <style jsx>{`
        .iscrizionegiocatori {
          background-image: url('complete/02-Iscrizione-Giocatori/IG-Title-ACCO.svg');
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 13vh;
          width: 50vw;
        }

        .play-button {
          background-image: url('complete/02-Iscrizione-Giocatori/IG-Continua-ACCO.svg');
          background-size: cover;
          background-repeat: no-repeat;
          height: 16vh;
          width: 83vw;
          border: none;
          cursor: pointer;
          margin-top: 10px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;

        }

        .boxStyle  {
          background-image: url('selectplayericons/IG-BG.svg');
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        };

        .playerBox {
          background-size: fit;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 80vw; /* Puoi regolare la larghezza in base alle tue esigenze */
          margin-bottom: 15vh; /* Aggiunto uno spazio tra le box dei giocatori */
          background-position: left top;
        }

        .penImage {
          width: 5vw;
          height: 10vh;
          position: absolute;
        }

        .addorremovepg  {
          
        }
      `}</style>
    </main>
  );
}
