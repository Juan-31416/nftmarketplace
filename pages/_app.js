import '@/styles/globals.css';

//INTERNAL IMPORT
import {
    NavBar, 
    Footer
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
        <NFTCard />
    </div>
);

export default MyApp;