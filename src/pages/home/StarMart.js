import React from 'react';
import Header from '../components/mart/Header';
import ProductFeed from '../components/mart/ProductFeed';
import { useState } from 'react';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import styles from '../../../styles/mart.module.css';

const StarMart = ({ products }) => {
    const [filteredProducts, setProducts] = useState(products);

    function filterProducts(searchText) {
        const matchedProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setProducts([...matchedProducts]);
    }

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8vh',
        marginLeft: '12vw',
        marginTop: '0vh',
        paddingTop: '12vh',
        borderTopLeft: '5vw',
    };

    return (
        <section style={style} className={styles.main}>
            <Header onSearchValue={filterProducts} />
            <section
                style={{
                    marginLeft: '13vw',
                    marginTop: '8vw',
                    marginLeft: '-82vw',
                }}>
                <div className="bg-gray-100 ">
                    <Head>
                        <title>StarMart</title>
                    </Head>

                    {/* Header */}

                    <main
                        className="max-w-screen-2xl mx-auto"
                        style={{
                            background: 'transparent',
                            backgroundAttachment: 'fixed',
                            width: '0vw',
                        }}>
                        {/* Product Feed */}
                        {filteredProducts.length > 0 ? (
                            <ProductFeed products={filteredProducts} />
                        ) : (
                            <h1 className="text-center text-2xl py-4">🙁 No matching products…</h1>
                        )}
                    </main>
                </div>
            </section>
        </section>
    );
};

export default StarMart;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

    return { props: { products } };
}
