export const SwitchInOut = ({ typeTransaction, onChangeTypeTransaction }) => {

    return (
        <div className="switch-container" onClick={onChangeTypeTransaction}>
            <span className={`label ${typeTransaction ? 'label--entrada' : ''}`}>
                Entrada
            </span>
            <div className="switch">
                <span className={`switch-key ${typeTransaction ? 'switch--entrada' : 'switch--saida'}`}></span>
            </div>
            <span className={`label ${typeTransaction ? '' : 'label--saida'}`}>Saída</span>
        </div>
    )
}

export default SwitchInOut;