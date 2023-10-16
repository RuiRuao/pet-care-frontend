import { useState } from "react";
import { createPet } from "../services/main/pets";


export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    breed: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    createPet(formData); // Use formData em vez de pet
  }

  return (
    <div>
      <h2>New Pet Form</h2>
      <hr />
      <form action="">
        <p>Nome do bicho:</p>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <p>Data de nascimento do bicho:</p>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) =>
            setFormData({ ...formData, dateOfBirth: e.target.value })
          }
        />
        <p>Raça do bicho:</p>
        <input
          type="text"
          value={formData.breed}
          onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
        />
        <div>
          <button onClick={handleSubmit}>Inserir</button>
        </div>
      </form>
    </div>
  );
}
