export const SwitchInOut = ({ inOutTransaction, onChangeTypeTransaction }) => {

    return (
        <div className="switch-container" onClick={onChangeTypeTransaction}>
            <span className={`label ${inOutTransaction ? 'label--entrada' : ''}`}>
                Entrada
            </span>
            <div className="switch">
                <span className={`switch-key ${inOutTransaction ? 'switch--entrada' : 'switch--saida'}`}></span>
            </div>
            <span className={`label ${inOutTransaction ? '' : 'label--saida'}`}>Saída</span>
        </div>
    )
}

export default SwitchInOut;