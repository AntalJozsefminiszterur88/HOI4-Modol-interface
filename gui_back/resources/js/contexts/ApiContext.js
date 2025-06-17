import { createContext, useContext, useState, useEffect } from 'react'
import myAxios from '../axios'

export const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
  const [medias, setMedias] = useState([])

  const getMedias = () => {
    myAxios.get('/medias-all')
      .then(res => setMedias(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }

  return (
    <ApiContext.Provider value={{ 
        medias, setMedias, getMedias
      }}>
      {children}
    </ApiContext.Provider>
  )
}

export const useApiContext = () => {
  return useContext(ApiContext);
}