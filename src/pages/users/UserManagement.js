import React, { useState } from 'react';
import styles from '../../../styles/user-mgmt.module.css';
import { getSession } from 'next-auth/react';
import LowChurn from './LowChurn';
const environment = process.env.NODE_ENV;
import Image from 'next/image';
import image from '../../../images/left_arrow.png';

export default function UserManagement({ users, data }) {
    const [clicked, setClicked] = useState(false);
    const [low, setLow] = useState(false);
    const [high, setHigh] = useState(false);
    const churn = data?.churn;
    const email = data?.email;
    const loyaltyPoints = data?.loyaltyPoints;
    return (
        <>
            {!clicked && (
                <section className={styles.cont}>
                    {churn <= 0.5 && (
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                setLow(true);
                                setClicked(true);
                            }}>
                            LOW CHURN MGMT
                        </a>
                    )}
                    {churn >= 0.5 && (
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                setHigh(true);
                                setClicked(true);
                            }}>
                            HIGH CHURN MGMT
                        </a>
                    )}
                </section>
            )}
            {clicked && low && <LowChurn email={email} loyaltyPoints={loyaltyPoints} />}
            {clicked && high && <HighChurn email={email} />}
        </>
    );
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    const email = session?.user.email;

    const url =
        environment === 'production' ? 'https://semac.vercel.app/api' : `http://localhost:3000/api`;

    const resp = await fetch(`${url}/user/users?email=${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const users = await resp.json();

    return { props: { users } };
}
