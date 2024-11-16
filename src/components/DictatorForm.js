import React, { useState, useEffect } from "react";

const DictatorForm = ({ editingDictator, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    country: "",
    reign_period: "",
    famous_policy: "",
    kill_count: "",
  });

  useEffect(() => {
    if (editingDictator) {
      setFormData(editingDictator);
    } else {
      setFormData({
        id: "",
        name: "",
        country: "",
        reign_period: "",
        famous_policy: "",
        kill_count: "",
      });
    }
  }, [editingDictator]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div
      className="modal fade"
      id="dictatorModal"
      tabIndex="-1"
      aria-labelledby="dictatorModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: "#fff0f6" }}>
          <div className="modal-header">
            <h5 className="modal-title text-pink" id="dictatorModalLabel">
              {editingDictator ? "🩰 Edit Dictator 🩰" : "💖 Add a Dictator 💖"}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={onCancel}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="form-control"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="reign_period" className="form-label">
                  Reign Period
                </label>
                <input
                  type="text"
                  id="reign_period"
                  className="form-control"
                  value={formData.reign_period}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="famous_policy" className="form-label">
                  Famous Policy
                </label>
                <input
                  type="text"
                  id="famous_policy"
                  className="form-control"
                  value={formData.famous_policy}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="kill_count" className="form-label">
                  Kill Count
                </label>
                <input
                  type="text"
                  id="kill_count"
                  className="form-control"
                  value={formData.kill_count}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal" onClick={onCancel}>
                  Close
                </button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                  {editingDictator ? "Update Dictator" : "Add Dictator"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DictatorForm;
