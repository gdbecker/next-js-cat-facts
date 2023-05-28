'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';
import CatFact from './components/CatFact';
import dataFile from './json/data.json';

// Attempt to use SWR
// useSWR allows the use of SWR inside function components
// import useSWR from 'swr';

function Home() {

  // Attempt to use SWR
  // Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data, error } = useSWR('/api/images/staticdata', fetcher);

  const [catData, setCatData] = useState({
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

    // Method when using the /api folder routing
    // const responseImage = await fetch('/api/images');
    // const dataImage = await responseImage.json();

    // Method that works when deploying to Vercel or Netlify
    var num = Math.floor(0 + Math.random() * (dataFile.length - 1 + 1));
    const dataImage = dataFile[num];

    setCatData({
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