import {useContext, useState, useEffect} from "react"
import PetContext from "../Context/PetContext"
import {useParams} from "react-router-dom"
import PetsContext from "../Context/PetsContext"
import {updatePet} from "../services/main/pets";



export default function Details ()
{
    const { pets } = useContext(PetContext);
    const { id } = useParams;

    const pet = pets.find((p) => p.id === id);

    const [detailsData, setDetailsData] =useState({
        name: pet.name,
        dateOfBirth: pet.dateOfBirth,
        breed: pet.breed,
    })

    function handleSubmit(event)
    {
        event.preventDefault();
        updatePet(detailsData)
    }

    useEffect(() => {
        // Atualize os detalhesData sempre que o pet muda
        setDetailsData({
          name: pet.name,
          dateOfBirth: pet.dateOfBirth,
          breed: pet.breed,
        });
      }, [pet]);

    return (
        <div>
            <form action="">
                <p>Nome do bicho:</p>
                <input
                    type="text"
                    value={pet.name}
                    onChange={(e) => setDetailsData({ ...detailsData, name: e.target.value })}
                />
                <p>Data de nascimento do bicho:</p>
                <input
                    type="date"
                    value={pet.dateOfBirth}
                    onChange={(e) =>
                        setDetailsData({ ...detailsData, dateOfBirth: e.target.value })
                    }
                />
                <p>Raça do bicho:</p>
                <input
                    type="text"
                    value={pet.breed}
                    onChange={(e) => setDetailsData({ ...detailsData, breed: e.target.value })}
                />
                <div>
                    <button onClick={handleSubmit}>Inserir</button>
                </div>
            </form>
        </div>
    )
}