import React, { useState } from "react";

const SwitchInOut = () => {
    const [inOut, setInOut] = useState(true);
    const handleClick = () => setInOut(!inOut);

    return (
        <div className="switch-container">
            <span className={`label ${inOut ? 'label--entrada' : ''}`}>
                Entrada
            </span>
            <div className="switch" onClick={handleClick}>
                <span className={`switch-key ${inOut ? 'switch--entrada' : 'switch--saida'}`}></span>
            </div>
            <span className={`label ${inOut ? '' : 'label--saida'}`}>Saída</span>
        </div>
    )
}

export default SwitchInOut;