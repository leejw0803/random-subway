import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `http://openapi.seoul.go.kr:8088/${
          import.meta.env.VITE_DATA_API_KEY
        }/xml/SearchInfoBySubwayNameService/1/5`
      );

      return data;
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
