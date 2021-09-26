import React from 'react';

const Names = (props) => {
    const {name} = props.names;
    return (
        <div>
            <p><small>Names: {name}</small></p>
        </div>
    );
};

export default Names;