import HeroBanner from "../components/Home-components/Hero section/HeroBanner";
import NavBar from "../components/Home-components/Hero section/NavBar";
import TopBanner from "../components/Home-components/Hero section/TopBanner";
import SecondBanner from "../components/Home-components/NewArrival Section/SecondBanner";
import NewArrivals from "../components/Home-components/NewArrival Section/NewArrivals";
import TopSelling from "../components/Home-components/TopSelling Section /TopSelling";
import BrowseByStyle from "../components/Home-components/Browse by syle/BrowseByStyle";
import HappyCustomer from "../components/Home-components/Our happy customer/HappyCustomer";
import Newsletter from "../components/Home-components/Newsletter/Newsletter";
import Company from "../components/Home-components/Company/Company";
import Footer from "../components/Home-components/Footer/Footer";

const Home = () => {
  return (
    <>
      <section>
        <TopBanner />
        <NavBar />
        <HeroBanner />
      </section>

      <section>
        <SecondBanner />
        <NewArrivals />
      </section>

      <section>
        <TopSelling />
      </section>

      <section>
        <BrowseByStyle />
      </section>

      <section>
        <HappyCustomer />
      </section>

      <section>
        <Newsletter />
      </section>

      <section>
        <Company />
      </section>

      <Footer />
    </>
  );
};

export default Home;
