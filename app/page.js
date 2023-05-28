'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';
import CatFact from './components/CatFact';

function Home() {

  const [data, setData] = useState({
    fact: '',
    image: ''
  });

  const [loading, setLoading] = useState(true);

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
    const responseImage = await fetch('/api/images');
    const dataImage = await responseImage.json();

    setData({
      fact: dataFact.fact,
      image: dataImage.index
      // image: dataImage.url // for localhost url paths
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
              newData={data}
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