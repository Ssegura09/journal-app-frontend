import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:3001/entries');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //     console.log(jsonData)
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <NavBar />
    </div>
    
  );
}

export default App;