import BrandsOnSale from "../components/BrandsOnSale";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopBrand from "../components/TopBrand";

const HomeLayout = () => {
    return (
        <div>
            <header className="bg-base-200">
                <Header></Header>
            </header>
            <main className="min-h-screen">
                <section className="mx-auto p-10 w-8/12">
                    <Carousel></Carousel>
                </section>
                <section className="mx-auto p-10 w-10/12">
                    <TopBrand></TopBrand>
                </section>
                <section>
                    <BrandsOnSale></BrandsOnSale>
                </section>
            </main>
            <footer className="bg-neutral">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;