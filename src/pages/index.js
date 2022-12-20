import styles from '../../styles/main.module.css';
import UserHome from './home/UserHome';
import AdminHome from './home/AdminHome';
import Plogin from './Plogin.js';
import { getSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
const environment = process.env.NODE_ENV;

export default function Home({ user }) {
    const role = user?.role;
    const email = user?.email;
    const [userss, setUserss] = useState({});
    const url = 'http://localhost:3000/api';

    useEffect(() => {
        const getchData = async () => {
            const gata = await fetch(`${url}/user/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const usee = await gata.json();
            setUserss(usee);
        };

        // call the function
        getchData()
            // make sure to catch any error
            .catch(console.error);
    }, []);

    return (
        <div className={styles.container}>
            {!user && <Plogin />}
            {user && role === 'User' && <UserHome role={role} email={email} />}
            {user && role === 'Admin' && <AdminHome role={role} users={userss} />}
        </div>
    );
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    const email = session?.user.email;

    const url =
        environment === 'production' ? 'https://semac.vercel.app/api' : `http://localhost:3000/api`;

    let user = null;

    if (email) {
        const res = await fetch(`${url}/auth/user/?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        user = await res.json();

        // Pass data to the page via props
    }

    return { props: { user } };
}
