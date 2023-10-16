import { useContext } from "react";
import PetsContext from "../Context/PetsContext";
import { Link } from "react-router-dom"
import { deletePet } from "../services/main/pets";


export default function PetsList() {
    const { pets } = useContext(PetsContext);


    function handleDelete(petId)
    {
        deletePet(petId)
        
    }

    return (
        <div>
            <h2>Listagem de Pets</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>Raça</th>
                        <th>
                            <button>
                                <Link to="/new-pet">Novo Registo</Link>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((p) => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.dateOfBirth}</td>
                            <td>{p.breed}</td>
                            <td>
                                <button><Link to={`/details/${p.id}`}>Detalhes</Link></button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(p.id)}>Apagar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
