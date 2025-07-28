import HeroBanner from "../components/Hero section/HeroBanner";
import NavBar from "../components/Hero section/NavBar";
import TopBanner from "../components/Hero section/TopBanner";
import SecondBanner from "../components/NewArrival Section/SecondBanner";
import NewArrivals from "../components/NewArrival Section/NewArrivals";
import TopSelling from "../components/TopSelling Section/TopSelling";
import BrowseByStyle from "../components/Browse by style/BrowseByStyle";
import HappyCustomer from "../components/Our happy customer/HappyCustomer";
import Newsletter from "../components/Newsletter/Newsletter";
import Company from "../components/Company/Company";

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
    </>
  );
};

export default Home;
