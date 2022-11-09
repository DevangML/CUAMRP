import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import styles from '../../../styles/register.module.css';

const Register = () => {
    const [email, setEmail] = useState('');

    const changeHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/user/users', {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(email),
        });

        const resp = await res.json();
        console.log(resp);
        res.id !== null &&
            toast('USER DELETED SUCCESSFULLY', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'success',
            }) &&
            e.target.reset();
    };

    return (
        <section className={styles.cont}>
            <Tilt>
                <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
                    <form
                        className="h-full flex flex-col justify-evenly items-center"
                        onSubmit={submitHandler}>
                        <div className="text-white font-poppins text-2xl tracking-widest">
                            User Deletion
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input-text"
                            name="email"
                            onChange={changeHandler}
                        />
                        <input
                            type="Submit"
                            className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
                        />
                    </form>
                </div>
            </Tilt>
        </section>
    );
};

export default Register;
