import { Toaster } from "react-hot-toast";
import BrandsOnSale from "../components/BrandsOnSale";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopBrand from "../components/TopBrand";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header className="bg-base-200">
                <Header></Header>
            </header>
            <main className="min-h-screen">
                <section className="mx-auto mt-5 px-3 lg:p-10 w-full lg:w-8/12">
                    <Carousel></Carousel>
                </section>
                <section className="mx-auto p-10 w-full lg:w-10/12">
                    <TopBrand></TopBrand>
                </section>
                <section>
                    <BrandsOnSale></BrandsOnSale>
                </section>
            </main>
            <footer className="bg-neutral">
                <Footer></Footer>
            </footer>
            <Toaster></Toaster>
        </div>
    );
};

export default HomeLayout;