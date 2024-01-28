// BackButton.js
import React from 'react';

const BackButton = ({ className }) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button className={className} onClick={goBack}>Indietro</button>
  );
};

export default BackButton;
