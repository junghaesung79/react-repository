import React, { useState, } from 'react';
import { Link, } from "react-router-dom";
import Button from './components/Button';
import Input from './components/Input';

function LearnRoute() {
  const [routeNumber, setRouteNumber] = useState('/');
  function handleMoveBtn(e) {
    setRouteNumber(e.target.value);
  }
  
  return (
    <div>
      <div onChange={(e)=>{handleMoveBtn(e)}}>
        <Input placeholder='1~10' />
      </div>
      <Link to={routeNumber}>
        <Button color="white" background="black">
          Move
        </Button>
      </Link>
    </div>
  );
};

export default LearnRoute;