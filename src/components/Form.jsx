export default function Form()
{
    return (
        <div>
            <h2>New Pet Form</h2>
            <hr />
            <form action="">
                <p>Nome do bicho:</p>
                <input type="text"/>
                <p>Data de nascimento do bicho:</p>
                <input type="date"/>
                <p>Raça do bicho:</p>
                <input type="text"/>
                <div>
                    <button>Inserir</button>
                </div>
            </form>
        </div>
    )
}