import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import UpdatePage from "./pages/UpdatePage";
import './App.css';

const App = () => {
  const [dictators, setDictators] = useState([]);

  useEffect(() => {
    if(fetchData());
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://67296e396d5fa4901b6d1e3f.mockapi.io/my_data");
    const data = await response.json();
    setDictators(data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/list" element={<ListPage dictators={dictators} refresh={fetchData} />} />
        <Route path="/update" element={<UpdatePage refresh={fetchData} />} />
        <Route path="/" element={<ListPage dictators={dictators} refresh={fetchData} />} />
      </Routes>
    </Router>
  );
};

export default App;
