import styles from '../../styles/main.module.css';
import UserHome from './home/UserHome';
import AdminHome from './home/AdminHome';
import Plogin from './Plogin.js';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home({ user, time }) {
    const role = user?.role;
    console.log(time);
    return (
        <div className={styles.container}>
            {!user && <Plogin />}
            {user && role === 'User' && <UserHome role={role} />}
            {user && role === 'Admin' && <AdminHome role={role} />}
        </div>
    );
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    const email = session?.user.email;

    const url =
        environment === 'production' ? 'https://semac.vercel.app/api' : `http://localhost:3000/api`;

    let user = null;
    let time = null;

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

    const rez = await fetch(`${url}/time`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    time = await rez.json();

    return { props: { user, time } };
}
