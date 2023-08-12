import '@/styles/globals.css';

//INTERNAL IMPORT
import {NavBar, Footer, HeroSection} from "../components/Components_index";

const MyApp = ({ Component, pageProps })=> (
    <div>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <HeroSection />
    </div>
);

export default MyApp;