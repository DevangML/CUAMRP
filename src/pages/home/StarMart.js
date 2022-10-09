import React from 'react';
import Header from '../components/mart/Header';
import Banner from "../components/mart/Banner";
import ProductFeed from "../components/mart/ProductFeed";
import { useState } from "react";
import { getSession } from "next-auth/react";
import Head from 'next/head';


const StarMart = ({ products }) => {

  const [filteredProducts, setProducts] = useState(products);

  function filterProducts(searchText) {
    const matchedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts([...matchedProducts]);
  }

  return (
    <section style={{ marginLeft: '13vw', marginTop: '3vw' }}>
      <div className="bg-gray-100 ">
        <Head>
          <title>StarMart</title>
        </Head>

        {/* Header */}
        <Header onSearchValue={filterProducts} />

        <main className="max-w-screen-2xl mx-auto">
          <Banner />

          {/* Product Feed */}
          {filteredProducts.length > 0 ? (
            <ProductFeed products={filteredProducts} />
          ) : (
            <h1 className="text-center text-2xl py-4">
              🙁 No matching products…
            </h1>
          )}
        </main>
      </div>
    </section>
  );
};

export default StarMart;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return { props: { products } };
}
