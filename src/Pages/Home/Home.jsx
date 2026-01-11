import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
    return (
        <div>
            <section><Navbar></Navbar></section>
            <section><Hero></Hero></section>
        </div>
    );
};

export default Home;