import { createContext, useState, useEffect, } from 'react';
import { getPetById } from '../services/main/pets';

const PetContext = createContext();

export function PetProvider({ children })
{
  const [pet, setPet] = useState([]); 

  useEffect(() => {
    async function fetchData()
    {
        try 
        {
          const data = await getPetById();
          setPet(data)
        } 
        catch (error) 
        {
          console.error(error);
        }
    }
    fetchData();
  }, []);

  return (
    <PetContext.Provider value={{ pet }}>
      {children}
    </PetContext.Provider>
  );
};

export default PetContext
