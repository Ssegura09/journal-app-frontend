import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/entries');
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData)
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {data.map((item) => (
        <p key={item.entry_id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;