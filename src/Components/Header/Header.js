import React, { useEffect, useState } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard';
import Names from '../Names/Names';

const Header = () => {
    const [item, setItem] = useState([]);
    const [person, setPerson] = useState([]);
    //loading data
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    const eventHandler = (item) => {
        const total = [...person, item];
        setPerson(total);
    }
    //calculating total salary
    let totalPrice = 0;
    for (let i = 0; i < person.length; i++) {
        const item = person[i];
        totalPrice = totalPrice + item.salary;
    }

    return (
        <div>
            <header className='text-center shadow py-2 sticky-top' style={{backgroundColor: '#ffffffe6', backdropFilter: 'blur(10px)'}}>
                <h1>Best Game Of Thrones Characters, Ranked</h1>
                <div>
                    <h5>Total Added cards: {person.length}</h5>
                    <h5>Total Salary: $ {totalPrice}</h5>
                    {
                        person.map( name => <Names key={name.rank} names={name}></Names>)
                    }
                </div>
            </header>

            <div className='container '>
                <div className="row">
                    {
                        item.map(data => <DisplayCard key={data.id} data={data} eventHandler={eventHandler}></DisplayCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;