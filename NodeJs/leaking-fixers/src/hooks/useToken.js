import { useState, useEffect } from 'react'
import axios from 'axios';



const useToken = user => {

    const [token, setToken] = useState('');

    useEffect(() => {

        const getToken = async () => {
            const email = user?.user?.email;

            if (email) {
                const { data } = await axios.post('https://calm-hollows-18504.herokuapp.com/login', { email });

                localStorage.setItem('accessToken', data.accessToken);

                setToken(data.accessToken);
            }
        }
        getToken();

    }, [user])

    return [token];
}

export default useToken;