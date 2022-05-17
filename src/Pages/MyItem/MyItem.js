import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import UserInventoryItem from '../../hooks/UserInventoryItem';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const MyItem = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://whispering-cove-75294.herokuapp.com/myitem?email=${user.email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setItems(data);
                    console.log(data.message);
                }
                if (data.message === 'Forbidden access') {
                    signOut(auth);
                    navigate('/login');
                    toast.error('Forbidden access (403)')
                }
                if (data.message === 'Unouthorize access') {
                    signOut(auth);
                    navigate('/login');
                    toast.error('Unouthorize access (401)')
                }
            });
    }, [navigate, user])

    return (
        <div>
            <h2>This is my item {items?.length}</h2>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>

                        <>
                            {
                                items?.map((item, keys) => <UserInventoryItem
                                    item={item}
                                    keys={keys}
                                    key={item?.key}
                                ></UserInventoryItem>)
                            }
                        </>

                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default MyItem