import { useAppContext } from '../contexts/AppContext';
import Webcam from 'react-webcam';
import Link from 'next/link';
import { useState } from 'react';

export default function Step3() {
  const AppContext = useAppContext();
  const videoConstraints = { facingMode: 'user' };
  const captureImage = () => {
    const screenshot = AppContext.webcamRef.getScreenshot();
    setCapturedImage(screenshot);
  };

  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen'>
      <div className='boxStyle'>
        <div className='overlayImage'>
          <div className="cameraStyle" />
          <Webcam
            audio={false}
            height={120}
            width={214}
            screenshotFormat='image/jpeg'
            videoConstraints={videoConstraints}
          >
            {({ getScreenshot }) => (
              <button
                className='scattaStyle'
                onClick={() => {
                  AppContext.setImgSrc(getScreenshot());
                  console.log(AppContext.imgSrc);
                }}
              />
            )}
          </Webcam>
        </div>

        <div className='sfogliaStyle'>
          <Link className='mt-10' href={{ pathname: '/selectpg', query: { step: 4 } }}></Link>
        </div>
      </div>

      <style jsx>{`
        .boxStyle {
          background-image: url('../complete/06-Fotografia-Scatta/FO-ACCO.svg');
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
        }

        .cameraStyle {
          position: relative;
          overflow: hidden;
          border-radius: 50%;
          transform: rotateX(90deg); /* Aggiunta della rotazione di 90 gradi sull'asse verticale */
        }

        .overlayImage {
          width: 75%;
          background-image: url('illustrazioni/2_A.png');
          background-size: contain;
          background-repeat: no-repeat;
          margin-top: 130px;
        }

        .sfogliaStyle {
          background-image: url('../complete/04-RichiamoGiocatori/RG-Sfoglia.svg');
          background-size: contain;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          padding: 25px 45px;
          margin-top: 10px;
        }

        .scattaStyle {
          background-image: url('../complete/06-Fotografia-Scatta/FO-PulsanteScatta.svg');
          background-size: contain;
          background-repeat: no-repeat;
          width: 75px;
          height: 75px;
          margin-left: 105px;
          margin-top: 104px;
        }
      `}</style>
    </main>
  );
}
