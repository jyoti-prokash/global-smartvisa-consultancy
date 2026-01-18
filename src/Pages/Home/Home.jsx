import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import OurService from '../../Components/OurService/OurService';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <section><Navbar></Navbar></section>
            <section><Hero></Hero></section>
            <section><SectionTitle heading={"our Service"}></SectionTitle></section>
            <section><OurService></OurService></section>
            <section><SectionTitle heading={"why choose us"}></SectionTitle></section>
            <section><ChooseUs></ChooseUs></section>
            <section><Footer></Footer></section>
        </div>
    );
};

export default Home;