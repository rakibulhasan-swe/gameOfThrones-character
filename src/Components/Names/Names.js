import React from 'react';

const Names = (props) => {
    const {name} = props.names;
    return (
        <div>
            <small>Name: {name}</small>
        </div>
    );
};

export default Names;