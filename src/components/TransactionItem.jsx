const TransactionItem = ({ item }) => {

    const formatDate = dateString => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

    const formatPrice = price => {
        const priceFloat = parseFloat(price).toFixed(2)
        const priceString = priceFloat.toString().replace('.', ',')
        return priceString
    }

    return (
        <>
            <tr>
                <td>{formatDate(item.data_cad)}</td>
                <td>{item.type}</td>
                <td>{item.description}</td>
                <td>R$ {formatPrice(item.price)}</td>
                <td>{item.category}</td>
                <td>{item.status}</td>
                <td>{item.account}</td>
            </tr>
        </>
    )
}

export default TransactionItem;