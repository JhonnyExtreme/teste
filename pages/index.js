import { useState } from 'react';

function Contador() {
    const [contador,setContador]=useState(1);
    function adicionarContador() {
        setContador(contador + 1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function home() {
    return(
        <div>
            <center>
                <h1>Home</h1>
                <h2><Contador/></h2>
            </center>
        </div>
    )}

export default home