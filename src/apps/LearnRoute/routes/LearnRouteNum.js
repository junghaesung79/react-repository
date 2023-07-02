import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import Box from '../components/Box';

function LearnNum() {
  const [currentRouteNumber, setCurrentRouteNumber] = useState(0);
  const [count, setCount] = useState(0);
  const [colorState, setColorState] = useState('red');
  let params = useParams();

  function handlePlusButton() {
    setCount((current) => current + currentRouteNumber);
    if (count + currentRouteNumber > 9) {
      setColorState('yellow');
    }
    if (count + currentRouteNumber > 19) {
      setColorState('green');
    }
  }

  useEffect(() =>{
    setCurrentRouteNumber(Number(params.id));
  },[params.id]);

  return(
    <div>
      <div onClick={()=>{handlePlusButton()}}>
        <Button color="white" background="black">
          plus {currentRouteNumber}
        </Button>
      </div>
      <Box background={colorState} >
        {count}
      </Box>
    </div>
  )
}

export default LearnNum;