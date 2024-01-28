import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppContext } from '@/contexts/AppContext';

export default function SelectPg() {
  const router = useRouter();
  const { query } = router;
  const { players } = useAppContext();
  let step = query["step"];

  console.log(query);
  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen'>
      <div className="boxStyle top-0 left-0">
        <div className='textBox'>
          <p className='textStyle'>
            Select PG: Adesso giocano
            <span className='text-black-600'>{" " + players[(parseInt(step) - 1) % players.length] + " "}</span> e
            <span className='text-black-600'>{" " + players[(parseInt(step)) % players.length] + " "}</span>
          </p>

          <p>{query["step"]}</p>
        </div>
        <div className='sfogliaStyle'>
          <Link href={{ pathname: `/step${query["step"]}` }}> </Link>
        </div>

      </div>
      <style jsx>{`
        .sfogliaStyle {
          background-image: url('../complete/04-RichiamoGiocatori/RG-Sfoglia.svg');
          background-size: contain;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          padding: 25px 45px; /* Aumenta il padding per rendere il pulsante più grande */
          margin-top: 145px; /* Aggiunto margine superiore per spostare il pulsante in basso */
        }

        .boxStyle {
          background-image: url('../complete/04-RichiamoGiocatori/RG-ACCO.svg');
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          height: 100vh;
          width:100%;
        }

        .textStyle {
          text-align: center;
          font-size: 15px; /* Aggiunto 'px' e ridotto il valore del font size */
          margin-top: 10px; /* Ridotto lo spazio sopra il testo */
          max-width: 80%; /* Imposta la larghezza massima del testo */
        }

        .textBox {
            text-align: center;
            display: flex;
            justify-content: center;
            margin-top: 300px;      
        }
      `}</style>
    </main>
  );
}
