import React, { useState } from 'react';
import myAxios from '../axios';

function CreateModForm({ onCreated }) {
  const [form, setForm] = useState({ name: '', description: '', version: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    myAxios.post('/mods', form)
      .then(res => {
        if (onCreated) onCreated(res.data);
        setForm({ name: '', description: '', version: '' });
      })
      .catch(err => {
        console.error(err);
        setError('Failed to create mod');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div>
        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="border px-2"
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border px-2"
        ></textarea>
      </div>
      <div>
        <label>Version</label>
        <input
          name="version"
          value={form.version}
          onChange={handleChange}
          className="border px-2"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="px-4 py-1 bg-blue-500 text-white">Create Mod</button>
    </form>
  );
}

export default CreateModForm;
