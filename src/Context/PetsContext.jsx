import { createContext, useState, useEffect, } from 'react';
import { getAllPets } from '../services/main/pets';

const PetsContext = createContext();

export function PetsProvider({ children })
{
  const [pets, setPets] = useState([]); 

  useEffect(() => {
    async function fetchData()
    {
        try 
        {
          const data = await getAllPets();
          setPets(data)
        } 
        catch (error) 
        {
          console.error(error);
        }
    }
    fetchData();
  }, []);

  return (
    <PetsContext.Provider value={{ pets }}>
      {children}
    </PetsContext.Provider>
  );
}

export default PetsContext
