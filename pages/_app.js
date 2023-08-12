import '@/styles/globals.css';

//INTERNAL IMPORT
import {
    NavBar, 
    Footer, 
    HeroSection, 
    Service,
    BigNFTSlider,
    Subscribe,
    Title,
    Category,
    Filter
} from "../components/Components_index";

const MyApp = ({ Component, pageProps })=> (
    <div>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <HeroSection />
        <Service />
        <BigNFTSlider />
        <Subscribe />
        <Title />
        <Category />
        <Filter />
    </div>
);

export default MyApp;