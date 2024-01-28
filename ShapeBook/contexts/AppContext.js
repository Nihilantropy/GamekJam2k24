// AppContext.js
import { createContext, useContext, useState } from 'react';

// Create a context
const AppContext = createContext();

// Create a context provider component
export function AppProvider({ children }) {
  const [players, setPlayers] = useState(['', '', '']);
  const [imgSrc, setImgSrc] = useState(null);

  const updateString = (index, newValue) => {
    setPlayers((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = newValue;
      return newArray;
    });
  };

  const addPlayer = () => {
    setPlayers((prevArray) => {
        if (prevArray.length < 6) {
            const newArray = [...prevArray];
            newArray.push("");
            return newArray;
        } else {
            return prevArray;
        }
    })
  }

  const removePlayer = () => {
    setPlayers((prevArray) => {
        if (prevArray.length > 3) {
            const newArray = [...prevArray];
            newArray.pop();
            return newArray;
        } else {
            return prevArray;
        }
    })
  }

  return (
    <AppContext.Provider 
        value={{
            players,
            updateString,
            addPlayer,
            removePlayer,
            imgSrc,
            setImgSrc
            }}>
      {children}
    </AppContext.Provider>
  );
}

// Create a custom hook to use the context
export function useAppContext() {
  return useContext(AppContext);
}