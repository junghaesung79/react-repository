import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from './components/Button';
import Input from './components/Input';

function LearnRoute() {
  const [routeNumber, setRouteNumber] = useState('/learnroute');
  // const routeNumber = useRef('/learnroute');
  // const navigate = useNavigate();
  function handleNumberChange(e) {
    setRouteNumber(e.target.value);
    // routeNumber.current = e.target.value;
    // console.log(routeNumber.current);
  }
  return (
    <div>
      <div onChange={(e)=>{handleNumberChange(e)}}>
        <Input placeholder='1~10' />
      </div>
      {/* <div onClick={() => navigate(`/learnroute/${routeNumber.current}`)}>
        <Button color="white" background="black">
          Move
        </Button>
      </div> */}
      <Link to={routeNumber}>
        <Button color="white" background="black">
          Move
        </Button>
      </Link>
    </div>
  );
};

export default LearnRoute;