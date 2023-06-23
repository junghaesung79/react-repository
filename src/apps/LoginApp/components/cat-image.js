import React, { useEffect, useState } from 'react';
import axios from "axios";

function CatImage() {
  const [catSrc,setCatSrc] = useState("");
  useEffect(() => {
  axios.get('https://api.thecatapi.com/v1/images/search?size=full')
  .then((response) => {
    setCatSrc(response.data[0].url);
  })
  .catch((error) => console.log(error));
  }, []);

  return (
    <div className="cat-image-container">
      <img className='cat-image' src={catSrc}/>
    </div>
  )
}

export default CatImage;