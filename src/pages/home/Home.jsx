import HeadingTitle from "../../components/heading-title/HeadingTitle";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import HeaderBanner from "../../components/header-banner/HeaderBanner";

const Home = () => {


  return (
    <>
      <HeaderBanner />
      <Category />
      <SpecialOffers />

      <HeadingTitle title=" Shopping By The Brand " />
      <Brands />
    </>
  );
};

export default Home;
