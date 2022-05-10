import React from 'react';

const UserInventoryItem = ({ item, keys }) => {
    const { name, image, description, _id, Quantity,price } = item
    return (
        <tr>
            <th scope="row">{keys}</th>
            <td>{name}</td>
            <td>{Quantity}</td>
            <td>a</td>
        </tr>
    );
};

export default UserInventoryItem;