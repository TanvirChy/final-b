import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import WinnerForm from '../../components/winnerForm/WinnerForm';
import WinnerList from '../../components/winnerList/WinnerList';
import { Context } from '../../context/Context';

const Winnerbar = () => {
    const [admin, setAdmin] = useState(false);
    const { user } = useContext(Context);

    useEffect(() => {
        const getUser = async () => {
          try {
            const res = await axios.get(`/users/${user._id}`);
            console.log(res);
            
            res.data.role === "admin" ? setAdmin(true) : setAdmin(false);
          } catch (err) {
            console.log(err);
          }
        };
    
        getUser();
      }, [user]);

    return (
        <div>
            { admin ? <WinnerForm/>: <WinnerList/> }
        </div>
    )
}

export default Winnerbar
