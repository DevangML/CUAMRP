import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import styles from '../../../styles/register.module.css';

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        CreditScore: '',
        Age: '',
        Tenure: '',
        Balance: '',
        NumberOfProducts: '',
        HasCrCard: '',
        IsActiveMember: '',
        EstimatedSalary: '',
        France: '',
        Germany: '',
        Spain: '',
        Female: '',
        Male: '',
    });

    const changeHandler = (e) => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/user/users', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const resp = await res.json();
        console.log(resp);
        res.id !== null &&
            toast('USER REGISTERED SUCCESSFULLY', {
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
                            User Registration
                        </div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input-text"
                            name="name"
                            onChange={changeHandler}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input-text"
                            name="email"
                            onChange={changeHandler}
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="input-text"
                            name="phone"
                            onChange={changeHandler}
                        />
                        <input
                            type="text"
                            placeholder="Credit Score"
                            className="input-text"
                            name="CreditScore"
                            onChange={changeHandler}
                        />
                        <input
                            type="text"
                            placeholder="Tenure"
                            className="input-text"
                            name="Tenure"
                            onChange={changeHandler}
                        />
                        <input
                            type="text"
                            placeholder="Balance"
                            className="input-text"
                            name="Balance"
                            onChange={changeHandler}
                        />
                        <input
                            type="text"
                            placeholder="NumberOfProducts"
                            className="input-text"
                            name="NumberOfProducts"
                            onChange={changeHandler}
                        />{' '}
                        <input
                            type="text"
                            placeholder="HasCrCard"
                            className="input-text"
                            name="HasCrCard"
                            onChange={changeHandler}
                        />{' '}
                        <input
                            type="text"
                            placeholder="IsActiveMember"
                            className="input-text"
                            name="IsActiveMember"
                            onChange={changeHandler}
                        />{' '}
                        <input
                            type="text"
                            placeholder="EstimatedSalary"
                            className="input-text"
                            name="EstimatedSalary"
                            onChange={changeHandler}
                        />{' '}
                        <input
                            type="text"
                            placeholder="France"
                            className="input-text"
                            name="France"
                            onChange={changeHandler}
                        />{' '}
                        <input
                            type="text"
                            placeholder="Germany"
                            className="input-text"
                            name="Germany"
                            onChange={changeHandler}
                        />{' '}
                        <input
                            type="text"
                            placeholder="Spain"
                            className="input-text"
                            name="Spain"
                            onChange={changeHandler}
                        />{' '}
                        <input
                            type="text"
                            placeholder="Female"
                            className="input-text"
                            name="Female"
                            onChange={changeHandler}
                        />{' '}
                        <input
                            type="text"
                            placeholder="Male"
                            className="input-text"
                            name="Male"
                            onChange={changeHandler}
                        />{' '}
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
