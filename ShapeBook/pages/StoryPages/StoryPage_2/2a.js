import Link from 'next/link';
import RulesButton from '../../RulesButton';
import { useEffect } from 'react';
import { Howl } from 'howler';

export default function Intro() {

  useEffect(() => {
    // Primo file audio
    const sound1 = new Howl({
      src: ['/musiche/Shape-Book-02.wav'],
      autoplay: true,
      loop: true,
      volume: 0.2,
    });

    // Secondo file audio
    const sound2 = new Howl({
      src: ['/rend/2_A.wav'],
      autoplay: true, // Puoi scegliere di non farlo partire automaticamente
      loop: false,
      volume: 1,
    });

    // Riproduci il secondo suono se necessario
    // sound2.play();

    return () => {
      // Scarica entrambi i suoni quando il componente viene smontato
      sound1.unload();
      sound2.unload();
    };
  }, []);

    return (
        <main className='text-5xl flex flex-col items-center justify-center w-screen h-screen'>
            <div className="boxStyle top-60">
            <div className='flex flex-row w-full justify-end'>
                <div className="buttonContainer">
                    <RulesButton />
                </div>
                </div>
                <div className='imageStyle'></div>
                <p className='textStyle'>
                    Nella cucina del castello viveva Almiro, il Mago pasticcione.
                    <br/>Mentre preparava la torta di fagioli del mercoledì, gli cadde un
                    alambicco dentro il calderone.
                    <br/>
                </p>
                <Link href="./2b" passHref>
            <button className='sfogliaStyle'></button>
        </Link>
            </div>
            
        <style jsx>{`
        .boxStyle  {
            background-image: url('../../../complete/05-Immagine-Pulsanti/IP-ACCO.svg');
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .textStyle  {
            text-align: center;
            font-size: 20px; /* Aggiunto 'px' e ridotto il valore del font size */
            font-family: 'Times New Roman', Times, serif;
            margin-top: -40px; /* Spazio sopra il testo */
            margin-right: 20px;
            margin-left: 20px;
        }

        .imageStyle {
            background-image: url('../../../illustrazioni/2_A.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 80%;
            height: 50vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 80px; /* Aumenta questo valore per spostare l'immagine più in basso */
          }
          

        .sfogliaStyle {
            background-image: url('../../../complete/05-Immagine-Pulsanti/IP-Sfoglia.svg');
            background-size: contain;
            background-repeat: no-repeat;
            display: block;
            padding: 25px 45px; /* Aumenta il padding per rendere il pulsante più grande */
            margin-top: 20px; /* Sposta il pulsante più in basso */
          }

          .buttonContainer {
            /* position: absolute; */
            top: 50px;
            right: 80px;
            display: flex;
            gap: 10px; /* Spazio tra i pulsanti */
          }
          
      `}</style>
        </main>
    );
}
