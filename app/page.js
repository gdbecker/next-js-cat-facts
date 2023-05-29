'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';
import CatFact from './components/CatFact';

function Home() {

  const [catData, setCatData] = useState({
    fact: '',
    image: []
  });

  const [loading, setLoading] = useState(true);

  // Function for grabbing new data
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
    const responseImage = await fetch('/api/');
    const dataImage = await responseImage.json();

    setCatData({
      fact: dataFact.fact,
      image: dataImage
    });

    setLoading(false)
  }

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.min.js');
    fetchNewData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <main id="home-page">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <CatFact
              newData={catData}
              fetchNewData={fetchNewData}
            />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </main>
  )
}

export default Home;