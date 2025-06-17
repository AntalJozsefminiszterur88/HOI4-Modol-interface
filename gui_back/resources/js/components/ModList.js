import React, { useEffect, useState } from 'react';
import myAxios from '../axios';

function ModList() {
  const [mods, setMods] = useState([]);

  useEffect(() => {
    myAxios.get('/mods-all').then(res => {
      setMods(res.data);
    }).catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div>
      <h2>Mods</h2>
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
