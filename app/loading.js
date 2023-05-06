import React from 'react'
import Image from 'next/image';

function LoadingPage() {
  return (
    <div id="loading-page">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="loading-text">something meow on the way</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Image
              alt="cat-image"
              src='/../public/cat-loading.png'
              width={306}
              height={185}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage;
