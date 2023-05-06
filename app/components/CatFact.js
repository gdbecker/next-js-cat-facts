'use client';
import { useState, useEffect } from 'react';
import { FaCat } from  'react-icons/fa';
import Image from 'next/image';

async function CatFact({ newFact, newImage, fetchNewData }) {
  const [fact, setFact] = useState(newFact);
  const [image, setImage] = useState(newImage);

  const onClick = async (e) => {
    fetchNewData();
  }

  const imageFile = require(image);

  // style={{ backgroundImage: `url(${require(image)})` }}

  return (
    <div id="cat-fact">
      <div className="container">
        <div className="row">
          
          <div className="col">
            <div className="cat-image-wrapper" style={{ backgroundImage: `url(${require(imageFile)})` }}>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CatFact;