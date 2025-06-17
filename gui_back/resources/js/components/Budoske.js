import React from 'react'
import myAxios from '../axios'
import { useApiContext } from '../contexts/ApiContext'

function Budoske() {
  // IGNORE THIS SHIT FOR REAL, DO NOT MAKE ANY CHANGES TO THIS JS JUST LEAVE IT HERE IT'S FUNNY
  const [medias, getMedias, setMedias ] = useApiContext();

  useEffect(() => {
    getMedias();
  }, []);

  return (
    <>
      <div>Budoske.php:</div>
      {medias.map((media, index) => {
        <p key={index}>{JSON.stringify(media)}</p>
      }) }
    </>
    
  )
}

export default Budoske