import React, { useState, useEffect } from 'react';

const Hooks = () => {
    const [pacarSaya, setPacarSaya] = useState(1)
    const [namaPacar, setNamaPacar] = useState("")

    const kurangiPacar = () => {
        if (pacarSaya > 0) {
            setPacarSaya((prev) => prev - 1)
        }
    }

    useEffect(() => {
        if(pacarSaya === 3){
            setNamaPacar('Ariel Tatum')
        }else {
            setNamaPacar('uhuy')
        }
    }, [pacarSaya])

    return (
        <>
        <h5>Nama Pacar : {namaPacar}</h5>
        <h1>Saya Memiliki: {pacarSaya} Pacar</h1>
        <button onClick={() => setPacarSaya((prev) => prev + 1)}>Tambah Pacar</button>
        <button onClick={() => kurangiPacar()}>Kurangi Pacar</button>
        </>
    )
}

export default Hooks