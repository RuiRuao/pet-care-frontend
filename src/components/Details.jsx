import {useContext} from "react"
import PetContext from "../Context/PetContext"

export default function Details ()
{
    const { pet } = useContext(PetContext);
    return (
        <div>
            <p>ID: {pet.id}</p>
            <p>Nome: {pet.name}</p>
            <p>Data de nascimento:{pet.dateOfBirth}</p>
            <p>Raça:{pet.breed}</p>
        </div>
    )
}