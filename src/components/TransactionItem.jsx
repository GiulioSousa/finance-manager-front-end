const TransactionItem = ({ item }) => {
    return (
        <>
            <tr>
                <td>{item.data_cad}</td>
                <td>{item.type}</td>
                <td>{item.description}</td>
                <td>R$ {item.price}</td>
                <td>{item.category}</td>
                <td>{item.status}</td>
                <td>{item.account}</td>
            </tr>
        </>
    )
}

export default TransactionItem;