import React from 'react';
import Carousel from '../components/Carousel';
import TopBrand from '../components/TopBrand';
import BrandsOnSale from '../components/BrandsOnSale';
import Testimonials from '../components/Testimonials';
import Achivement from '../components/Achivement';
import ContactUs from '../components/ContactUs';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <>
            <main className="min-h-screen">
                <section className="mx-auto mt-5 lg:p-10 px-3 w-full lg:w-8/12">
                    <Carousel></Carousel>
                </section>
                <section className="mx-auto p-10 w-full lg:w-10/12">
                    <TopBrand></TopBrand>
                </section>
                <section>
                    <BrandsOnSale></BrandsOnSale>
                </section>
                <section>
                    <Testimonials></Testimonials>
                </section>
                <section>
                    <Achivement></Achivement>
                </section>
                <section>
                    <ContactUs></ContactUs>
                </section>
            </main>
            
            <Toaster></Toaster>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Home;