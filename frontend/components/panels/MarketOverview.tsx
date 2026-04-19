import React from 'react';

const MarketOverview: React.FC = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="panel market-cap">
                <h3>Global Market Cap</h3>
                <p>$XXX,XXX,XXX</p>
            </div>
            <div className="panel volume">
                <h3>24h Volume</h3>
                <p>$XXX,XXX,XXX</p>
            </div>
            <div className="panel btc-dominance">
                <h3>BTC Dominance</h3>
                <p>XX%</p>
            </div>
            <div className="panel fear-greed-index">
                <h3>Fear & Greed Index</h3>
                <p>XX</p>
            </div>
        </div>
    );
};

export default MarketOverview;