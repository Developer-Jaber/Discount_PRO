import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeLayout = () => {
    return (
        <div>
            <header className="bg-base-200">
                <Header></Header>
            </header>
            <main className="min-h-screen">

            </main>
            <footer className="bg-neutral">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;