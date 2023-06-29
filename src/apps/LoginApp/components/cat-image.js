import React, { useEffect, useState } from 'react';
import axios from "axios";

function CatImage() {
  const [catSrc, setCatSrc] = useState("");
  const [catClick, setCatClick] = useState(0);

  useEffect(() => {
  axios.get('https://api.thecatapi.com/v1/images/search?size=full')
  .then((response) => {
    setCatSrc(response.data[0].url);
  })
  .catch((error) => console.log(error));
  }, [catClick]);

  return (
    <div className="cat-image-container" onClick={() => {setCatClick((current)=>(current + 1))}}>
      <img className='cat-image' src={catSrc}/>
    </div>
  )
}

export default CatImage;