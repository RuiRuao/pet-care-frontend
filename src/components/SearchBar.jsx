import {useState} from "react"

export default function SearchBar()
{
    const [searchedName, setSearchedName] = useState("");

    function handleClick()
    {
        console.log(searchedName);
    }

    return(
        <div>
            <input 
            type="text"
            placeholder="Pesquise por um bicho"
            value={searchedName}
            onChange={(e) => setSearchedName(e.target.value)} />
            <button onClick={() => handleClick(name)}>Pesquisar</button>
        </div>
    )

}