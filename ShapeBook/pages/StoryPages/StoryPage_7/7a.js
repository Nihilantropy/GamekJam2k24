import { useState } from 'react';
import Link from 'next/link';

export default function Page7() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % 6) + 1);
  };

  return (
    <main className='prova'>
      <div className='boxStyle '>
        {[1, 2, 3, 4, 5, 6].map((slideNumber) => (
          <div
            className={`ph${slideNumber}`}
            key={slideNumber}
            style={{ display: slideNumber === currentSlide ? 'flex' : 'none' }}
          ></div>
        ))}
      </div>
      <button className='sfogliaStyle' onClick={handleNextSlide}> </button>
      <Link href="../../" passHref>
        <button > e si ricomincia siori e siore </button>
      </Link>
      <style jsx>{`
        .boxStyle {
          background-image: url('../../complete/SR-MOCKUP.svg');
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
        }

        .ph1,
        .ph2,
        .ph3,
        .ph4,
        .ph5,
        .ph6 {
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100px;
          width: 200px;
        }

        .ph1 {
          background-image: url('../../../illustrazioni/2_B.png');
        }
        .ph2 {
          background-image: url('../../../illustrazioni/2_F.png');
        }
        .ph3 {
          background-image: url('../../../illustrazioni/3_raccordo_A.png');
        }
        .ph4 {
          background-image: url('../../../illustrazioni/4_C.png');
        }
        .ph5 {
          background-image: url('../../../illustrazioni/5_D.png');
        }
        .ph6 {
          background-image: url('../../../illustrazioni/6_finale_A.png');
        }

        .sfogliaStyle {
          background-image: url('../../complete/04-RichiamoGiocatori/RG-Sfoglia.svg');
          background-size: contain;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          padding: 25px 45px;
          margin-top: 10px;
        }

        .prova {

            justify-content: center;

            align-items: center;

            flex-direction: column;

            width: 100vw;

            height: 100vh;


            display: flex;
        
        }
      `}</style>
    </main>
  );
}
