'use client';
import React from'react';
import { useState, useEffect, useCallback } from 'react';
import { FaCat } from  'react-icons/fa';
import Image from 'next/image';

async function CatFact({ newData, fetchNewData }) {
  // const [fact, setFact] = useState(newFact);
  // const [image, setImage] = useState(newImage);

  const onClick = async (e) => {
    // const responseFact = await fetch(
    //   'https://catfact.ninja/fact', {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     }
    //   }
    // );  
    // const dataFact = await responseFact.json();
    // setFact(dataFact.fact);

    // const responseImage = await fetch('/api/images');
    // const dataImage = await responseImage.json();
    // setImage(dataImage.url);
    fetchNewData();
  }

  return (
    <div id="cat-fact">
      <div className="container">
        <div className="row mt-5">
            <div className="cat-image-wrapper">
              <Image
                alt="cat-image"
                src={newData.image}
                layout='fill'
                objectFit='contain'
              />
            </div>
        </div>
        <div className="row mt-3">
          <h2 className="fact-text">{newData.fact}</h2>
        </div>
        <div className="row">
          <div className="col">
            <hr className="divider"></hr>
          </div>          
        </div>
        <div className="row mt-1 g-1">
          <button className="cat-btn" type="button" onClick={e => onClick(e)}><FaCat></FaCat></button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CatFact);