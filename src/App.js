import React, { useState, useEffect } from "react";
import DictatorList from "./components/DictatorList";
import DictatorForm from "./components/DictatorForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [dictators, setDictators] = useState([]);
  const [editingDictator, setEditingDictator] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://67296e396d5fa4901b6d1e3f.mockapi.io/my_data");
    const data = await response.json();
    setDictators(data);
  };

  const addOrUpdateDictator = async (dictator) => {
    if (dictator.id) {
      // Update
      await fetch(`https://67296e396d5fa4901b6d1e3f.mockapi.io/my_data/${dictator.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dictator),
      });
    } else {
      // Add
      await fetch("https://67296e396d5fa4901b6d1e3f.mockapi.io/my_data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dictator),
      });
    }
    fetchData();
  };

  const deleteDictator = async (id) => {
    await fetch(`https://67296e396d5fa4901b6d1e3f.mockapi.io/my_data/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">💗✨Dictators✨💗</h1>
      <div className="text-center mb-3">
        <button onClick={fetchData} className="btn btn-warning">
          Refresh List
        </button>
        <button
          className="btn btn-pink"
          data-bs-toggle="modal"
          data-bs-target="#dictatorModal"
          onClick={() => setEditingDictator(null)}
        >
          Add new dictator
        </button>
      </div>
      <DictatorList dictators={dictators} onEdit={setEditingDictator} onDelete={deleteDictator} />
      <DictatorForm
        editingDictator={editingDictator}
        onSave={addOrUpdateDictator}
        onCancel={() => setEditingDictator(null)}
      />
    </div>
  );
};

export default App;
