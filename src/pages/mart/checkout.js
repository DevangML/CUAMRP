import Image from 'next/image';
import { useSelector } from 'react-redux';
import Header from '../components/mart/Header';
import CheckoutProduct from '../components/mart/CheckoutProduct';
import { selectItems, selectTotal } from '../../slices/basketSlice';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/react';
import { groupBy } from 'lodash';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from '../../../styles/mart.module.css';
import { useState } from 'react';
import axios from 'axios';

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const { data: session, status } = useSession();

    let d = [];
    for (let i = 0; i < items.length; i++) {
        d.push(items[i].title);
    }
    const dbHandler = async (e) => {
        e.preventDefault();

        await axios
            .put(`/api/mart/freq`, { email: session.user.email, items: d })
            .then((res) => {
                console.log(`Response is : ${JSON.stringify(res.response)}`);
            })
            .catch((err) => {
                console.log(`Response is: ${JSON.stringify(err.response)}`);
            });
    };

    const groupedItems = Object.values(groupBy(items, 'id'));
    return (
        <section
            style={{
                marginLeft: '13vw',
                marginTop: '3vw',
            }}>
            <div className={('bg-gray-100', styles.cart)} style={{ paddingTop: '8vh' }}>
                <Header />

                <main
                    className="lg:flex max-w-screen-2xl mx-auto"
                    style={{ height: '100vh', marginTop: '4vh' }}>
                    {/* Left */}
                    <div className="flex-grow m-5 shadow-sm">
                        <div className="flex flex-col p-5 space-y-50 bg-white">
                            <h1
                                className={`text-3xl ${
                                    items.length > 0 ? 'border-b pb-4' : 'pb-2'
                                }`}>
                                {items.length === 0
                                    ? 'Your StarMart Basket is empty.'
                                    : 'Shopping Basket'}
                            </h1>
                            <TransitionGroup>
                                {groupedItems.map((group, i) => (
                                    <CSSTransition
                                        key={group[0].image}
                                        timeout={500}
                                        classNames="item">
                                        <CheckoutProduct
                                            id={group[0].id}
                                            title={group[0].title}
                                            rating={group[0].rating}
                                            price={group[0].price}
                                            description={group[0].description}
                                            category={group[0].category}
                                            image={group[0].image}
                                            quantity={group.length}
                                        />
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        </div>
                    </div>

                    {/* Right */}
                    <CSSTransition
                        in={items.length > 0}
                        timeout={300}
                        classNames="disappear"
                        unmountOnExit>
                        <div
                            className="flex flex-col bg-white p-10 shadow-md"
                            style={{ maxHeight: '75vh', marginRight: '1vw' }}>
                            <h2 className="whitespace-nowrap">
                                Subtotal ({items.length} items):{' '}
                                <span className="font-bold">
                                    <Currency quantity={total} currency="EUR" />
                                </span>
                            </h2>

                            <button
                                role="link"
                                disabled={!session}
                                className={`button mt-2 ${
                                    !session &&
                                    'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed hover:from-gray-300'
                                }`}>
                                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                            </button>
                            <button
                                onClick={dbHandler}
                                disabled={!session}
                                className={`button mt-2 ${
                                    !session &&
                                    'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed hover:from-gray-300'
                                }`}>
                                {!session ? 'Sign in to checkout' : 'Add To DB'}
                            </button>
                        </div>
                    </CSSTransition>
                </main>
            </div>
        </section>
    );
}

export default Checkout;
