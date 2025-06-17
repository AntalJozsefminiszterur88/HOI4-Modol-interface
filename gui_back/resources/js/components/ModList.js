import React, { useEffect, useState } from 'react';
import myAxios from '../axios';
import CreateModForm from './CreateModForm';

function ModList() {
  const [mods, setMods] = useState([]);

  const fetchMods = () => {
    myAxios.get('/mods-all')
      .then(res => setMods(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchMods();
  }, []);

  const handleCreated = (mod) => {
    setMods(prev => [...prev, mod]);
  };

  return (
    <div>
      <h2>Mods</h2>
      <CreateModForm onCreated={handleCreated} />
      <ul>
        {mods.map(mod => (
          <li key={mod.id}>
            <strong>{mod.name}</strong> - {mod.version}
            <p>{mod.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModList;
