export const CardBalances = ({
    account,
    totalValue
}) => {

    return (
        <div className="card card-balance">
            <p className="balance-label">{account}</p>
            <span className="balance">R$ {totalValue}</span>
        </div>
    );
}