import React from 'react';

function MyData(props) {
    return (
        <div>
            <h2>Product Name: {props.pname}</h2>
            <p>Price: {props.price}</p>
            <p>Description: {props.pdescription}</p>
            <hr />
        </div>
    );
}

export default MyData;
