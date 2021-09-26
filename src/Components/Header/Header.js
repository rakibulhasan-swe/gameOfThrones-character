import React, { useEffect, useState } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard';

const Header = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    return (
        <div>
            <header className='text-center shadow py-3 sticky-top' style={{backgroundColor: '#ffffffe6', backdropFilter: 'blur(10px)'}}>
                <h1>Best Game Of Thrones Characters, Ranked</h1>
                <div>
                    <h5>Total Added cards: </h5>
                    <h5>Total Salary: </h5>
                </div>
            </header>

            <div className='container '>
                <div className="row">
                    {
                        item.map(data => <DisplayCard key={data.id} data={data}></DisplayCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;