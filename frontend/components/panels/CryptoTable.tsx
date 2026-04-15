import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const CryptoTable = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [sortOrder, setSortOrder] = useState({ key: 'market_cap', direction: 'asc' });

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((response) => response.json())
            .then((data) => setCryptoData(data));
    }, []);

    const handleSort = (key) => {
        const direction = sortOrder.key === key && sortOrder.direction === 'asc' ? 'desc' : 'asc';
        setSortOrder({ key, direction });
    };

    const sortedData = [...cryptoData].sort((a, b) => {
        const modifier = sortOrder.direction === 'asc' ? 1 : -1;
        if (a[sortOrder.key] < b[sortOrder.key]) return -1 * modifier;
        if (a[sortOrder.key] > b[sortOrder.key]) return 1 * modifier;
        return 0;
    });

    const gainLossColor = (change) => {
        return change >= 0 ? 'text-success' : 'text-danger';
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th onClick={() => handleSort('name')}>Name</th>
                    <th onClick={() => handleSort('current_price')}>Price</th>
                    <th onClick={() => handleSort('price_change_percentage_24h')}>24h Change</th>
                    <th onClick={() => handleSort('market_cap')}>Market Cap</th>
                    <th onClick={() => handleSort('total_volume')}>Volume</th>
                    <th onClick={() => handleSort('circulating_supply')}>Supply</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((crypto) => (
                    <tr key={crypto.id}>
                        <td>{crypto.name}</td>
                        <td>${crypto.current_price.toLocaleString()}</td>
                        <td className={gainLossColor(crypto.price_change_percentage_24h)}>{crypto.price_change_percentage_24h.toFixed(2)}%</td>
                        <td>${crypto.market_cap.toLocaleString()}</td>
                        <td>${crypto.total_volume.toLocaleString()}</td>
                        <td>{crypto.circulating_supply.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default CryptoTable;
