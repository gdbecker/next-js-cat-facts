'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from "next/link";
import LoadingPage from './loading';
import CatFact from './components/CatFact';

export default function Home() {

  const [fact, setFact] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  // const fetchNewFact = async () => {
  //   // await new Promise((resolve) => setTimeout(resolve, 3000));
  //   const data = await fetch('/api/facts');
  //   console.log(data)
  //   // const data = await response.json();
  //   setFact(data.fact);
  //   console.log(data)
  // }

  const fetchNewData = useCallback(async () => {
    const responseFact = await fetch(
      'https://catfact.ninja/fact', {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    );  
    const dataFact = await responseFact.json();
    setFact(dataFact.fact);

    const responseImage = await fetch('/api/images');
    const dataImage = await responseImage.json();
    setImage(dataImage.url);

    setLoading(false)
  }, [])

  // const fetchNewFact = useCallback(async () => {
  //   const response = await fetch(
  //     'https://catfact.ninja/fact', {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json"
  //       }
  //     }
  //   );  
  //   const data = await response.json();
  //   setFact(data.fact);
  // }, [])

  // const fetchNewImage = useCallback(async () => {
  //   const response = await fetch('/api/images');
  //   const data = await response.json();
  //   setImage(data.url);
  // }, [])

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.min.js');
    
    fetchNewData();

  }, [fetchNewData]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div id="home-page">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <CatFact
              newFact={fact}
              newImage={image}
              fetchNewData={fetchNewData}
            />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}
