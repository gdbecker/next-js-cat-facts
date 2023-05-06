'use client';
import { useState, useEffect, useCallback } from 'react';
import LoadingPage from './loading';
import CatFact from './components/CatFact';

export default function Home() {

  const [data, setData] = useState({
    fact: '',
    image: ''
  });

  // const [fact, setFact] = useState('');
  // const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  // const fetchNewData = useCallback(async () => {
  //   const responseFact = await fetch(
  //     'https://catfact.ninja/fact', {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json"
  //       }
  //     }
  //   );  
  //   const dataFact = await responseFact.json();
  //   setFact(dataFact.fact);

  //   const responseImage = await fetch('/api/images');
  //   const dataImage = await responseImage.json();
  //   setImage(dataImage.url);

  //   setLoading(false)
  // }, [])

  const fetchNewData = async () => {
    const responseFact = await fetch(
      'https://catfact.ninja/fact', {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    );  
    const dataFact = await responseFact.json();
    // setFact(dataFact.fact);

    const responseImage = await fetch('/api/images');
    const dataImage = await responseImage.json();
    // setImage(dataImage.url);
    setData({
      fact: dataFact.fact,
      image: dataImage.url
    });

    setLoading(false)
  }

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.min.js');
    
    fetchNewData();

    // if (data.fact != '' && data.image != '') {
    //   setLoading(false);
    // }
  }, []);

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
              // newFact={fact}
              // newImage={image}
              newData={data}
              fetchNewData={fetchNewData}
            />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}
