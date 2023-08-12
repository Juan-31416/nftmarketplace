import '@/styles/globals.css';

//INTERNAL IMPORT
import {NavBar, Footer, HeroSection, Service} from "../components/Components_index";

const MyApp = ({ Component, pageProps })=> (
    <div>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <HeroSection />
        <Service />
    </div>
);

export default MyApp;