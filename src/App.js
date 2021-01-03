import './App.css';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import inputArr from './input';

const style = {
  backgroundColor: 'white', 
  color: 'black', 
  padding: '3% 0',
  fontSize: '200%',
  fontWeight: 'bold',
  borderRadius: '8px',
  border: 'solid 2px black',
  fontFamily: 'Raleway',
  width: '35vw',
  marginTop: '50px'
}

const styleDiv = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '50px'
}

const RandomQuestion = (props) => {
  // if(props.usedNumbers.includes(props.randomNumber)) {
  //   <div>
  //     TRY AGAIN!
  //   </div>
  // } else {
    return (
      <div>
        {inputArr[props.randomNumber]}
      </div>
      )
  // }
}


const App = (props) => {
  let randomNumber; 
  // const usedNumbers = [];

  const randomNumberGenerator = () => {
    randomNumber = Math.floor(Math.random() * 113);
    return randomNumber;
  }

  const [randomQuestion, setRandomQuestion] = useState(randomNumber);
  const handleClick = () => {
    randomNumberGenerator();
    // usedNumbers.push(randomNumber);
    setRandomQuestion(randomNumber);
  }

  return (
    <div>
      <div style={styleDiv}>
        <Button variant='outlined' disableElevation style={style} onClick={handleClick}>
          Random question
        </Button>
      </div>
      <div style={styleDiv}>
        <RandomQuestion randomNumber={randomQuestion} />      
      </div>
      {/* <div style={styleDiv}>
        You already used all these numbers: {usedNumbers}!
      </div> */}
    </div>
  );
}

export default App;
