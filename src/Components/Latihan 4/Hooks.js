import React, { useState } from 'react';

const Hooks = () => {
    const [temanSaya, setTemanSaya] = useState("Hinata")

    return (
        <>
        <h1>{temanSaya}</h1>
        </>
    )
}

export default Hooks