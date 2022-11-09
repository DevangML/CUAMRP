import React from 'react';
import Tilt from 'react-parallax-tilt';
import styles from '../../../styles/user-mgmt.module.css';
import { getSession } from 'next-auth/react';
const environment = process.env.NODE_ENV;

export default function UserManagement({ users }) {
    const churn = users?.churn;
    console.log(`The user is ${users}`);
    return (
        <section className={styles.cont}>
            {churn <= 0.5 && <a href="/users/LowChurn">LOW CHURN MGMT</a>}
            {churn >= 0.5 && <a href="/users/HighChurn">HIGH CHURN MGMT</a>}
        </section>
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

    const res = await fetch(`${url}/user/users?email=${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const users = await res.json();

    return { props: { users } };
}
