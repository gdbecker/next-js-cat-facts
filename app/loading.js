import React from 'react'
import Image from 'next/image';
import CatLoading from '../public/cat-loading.png';

function LoadingPage() {
  return (
    <main id="loading-page">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="loading-text">something meow on the way</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Image
              alt="cat-image"
              src={CatLoading}
              width={306}
              height={185}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoadingPage;
