import React from 'react';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <nav>
                <div className="container">
                    <a href="/shope">Shope</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage">Manage Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;