import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UpdatePage = ({ refresh }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    country: "",
    reign_period: "",
    famous_policy: "",
    kill_count: "",
  });
  const [editCount, setEditCount] = useState(0);
  const inputRefs = useRef({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    if (id) {
      fetchDictator(id);
    }
  }, [location]);

  const fetchDictator = async (id) => {
    const response = await fetch(`https://67296e396d5fa4901b6d1e3f.mockapi.io/my_data/${id}`);
    const data = await response.json();
    setFormData(data);
  };

  const handleInputChange = async (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setEditCount((prev) => prev + 1);

    if (formData.id) {
      await fetch(`https://67296e396d5fa4901b6d1e3f.mockapi.io/my_data/${formData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, [id]: value }),
      });
      refresh();
    }
  };

  const handleSave = async () => {
    if (Object.values(inputRefs.current).some((ref) => !ref.value.trim())) {
      alert("All fields must be filled!");
      return;
    }

    if (formData.id) {
      await fetch(`https://67296e396d5fa4901b6d1e3f.mockapi.io/my_data/${formData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } else {
      await fetch("https://67296e396d5fa4901b6d1e3f.mockapi.io/my_data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    }
    refresh();
    navigate("/list");
  };

  return (
    <div className="container">
      <h1 className="text-center">
        {formData.id ? "🩰 Edit Dictator 🩰" : "💖 Add a Dictator 💖"}
      </h1>
      <p className="text-center">Edit Count: {editCount}</p>
      <form>
        {["name", "country", "reign_period", "famous_policy", "kill_count"].map((field) => (
          <div key={field} className="mb-3">
            <label htmlFor={field} className="form-label">
              {field.replace("_", " ").replace(/\b\w/g, (char) => char.toUpperCase())}
            </label>
            <input
              type="text"
              id={field}
              ref={(el) => (inputRefs.current[field] = el)}
              value={formData[field] || ""}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        ))}
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2" onClick={() => navigate("/list")}>
            Cancel
          </button>
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
