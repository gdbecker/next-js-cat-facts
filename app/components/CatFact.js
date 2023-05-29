'use client';
import React from'react';
import { FaCat } from  'react-icons/fa';
import Image from 'next/image';

async function CatFact({ newData, fetchNewData }) {

  function pickCatPic(imageList) {
    var num = Math.floor(0 + Math.random() * (imageList.length - 1 + 1));
    const dataImage = imageList[num];
    return dataImage;
  }

  const onClick = async (e) => {
    fetchNewData();
  }

  return (
    <div id="cat-fact">
      <div className="container">
        <div className="row mt-5">
          <div className="cat-image-wrapper">
            <Image
              src={pickCatPic(newData.image)}
              alt="cat-image"
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
        <div className="row mt-3">
          <h1 className="fact-text">{newData.fact}</h1>
        </div>
        <div className="row">
          <div className="col">
            <hr className="divider"></hr>
          </div>          
        </div>
        <div className="row mt-1 g-1">
          <button className="cat-btn" type="button" title="Get new cat fact!" onClick={e => onClick(e)}><FaCat></FaCat></button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CatFact);