import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Popular from "./Components/Popular";
import Shop from "./Components/Shop";
import img from "./assets/images/1.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.png";
import img7 from "./assets/images/7.png";
import img8 from "./assets/images/8.png";
import img9 from "./assets/images/9.png";
import img10 from "./assets/images/10.png";
import img11 from "./assets/images/11.png";
import img12 from "./assets/images/12.jpeg";
import img13 from "./assets/images/13.png";
import img14 from "./assets/images/14.png";
import img_twitter from "./assets/images/twitter.png";
import Nigeria from "./Components/Nigeria";
import Customers from "./Components/Customers";
import Twitcard from "./Components/Twitcard";
import Count from "./Components/Count";
import CountComponents from "./Components/CountComponents";
import clock from "./assets/images/clock.svg";
import shed2 from "./assets/images/shed2.svg";
import wallet from "./assets/images/wallet.svg";
import techcrunch from "./assets/images/techcrunch.svg";
import forbes from "./assets/images/forbes.svg";
import techpoint from "./assets/images/Techpoint.png";
import techcacbal from "./assets/images/techcabal.svg";
import cnn from "./assets/images/cnn.svg";
import Amazing from "./Components/Amazing";
import AmazingComp from "./Components/AmazingComp";
import Sponsor from "./Components/Sponsor";
import SponComps from "./Components/SponComps";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Shop />
      <Popular popular="Popular Products" see="See All Products" />
      <div className="grid md:grid-cols-4 gap-4 me-20 ms-20 mt-5">
        <Card
          img={img}
          title="Two-sided Business Cards"
          price="9,700 "
          per="per 100"
          btnText="Browse Two-sided Bu..."
        />
        <Card
          img={img2}
          title="A5 flyers (Single Sided)"
          price="16,500 "
          per="per 100"
          btnText="Browse A5 flyers (S..."
        />
        <Card
          img={img3}
          price="10,900 "
          per="per 100"
          btnText="Browse Round Sticke..."
          title='Round Stickers (3.5" Diameter)'
        />
        <Card
          img={img4}
          price="14,200 "
          per="per 1"
          btnText="Browse Simple Mugs"
          title="Simple Mugs"
        />
        <Card
          img={img5}
          price="14,200 "
          per="per 50"
          btnText="Browse Postcards (A..."
          title="Postcards (A6)"
        />
        <Card
          img={img6}
          price="35,200 "
          per="per 1"
          btnText="Browse Roll Up Bann..."
          title="Roll Up Banners (Big Base)"
        />
        <Card
          img={img7}
          price="45,500 "
          per="per 100 "
          btnText="Browse A2 Posters"
          title="A2 Posters"
        />
        <Card
          img={img8}
          price="30,400 "
          per="per 100"
          btnText="Browse Trifold Broc..."
          title="Trifold Brochures"
        />
        <Card
          img={img9}
          price="2,000 "
          per="per 1"
          btnText="Browse Landscape ID..."
          title="Landscape ID Cards"
        />
        <Card
          img={img10}
          price="3,800 "
          per="per 1"
          btnText="Browse Off White T-..."
          title="Off White T-shirts"
        />
        <Card
          img={img11}
          price="67,000 "
          per="per 100"
          btnText="Browse A4 Branded P..."
          title="A4 Branded Paper Bags"
        />
        <Card
          img={img12}
          price="17,600"
          per="per 100 "
          btnText="Browse A4 Courier B..."
          title="A4 Courier Bags"
        />
      </div>
      <Popular popular="Popular Categories" see="See All Categories" />
      <div className="grid md:grid-cols-4 gap-4 me-20 ms-20 mt-5">
        <Card
          img={img13}
          price="19,000 "
          per="per 50"
          btnText="Browse Greeting Car..."
          title="Greeting cards"
        />
        <Card
          img={img14}
          price="5,400 "
          per="per 75"
          btnText="Browse Stickers"
          title="Stickers"
        />
      </div>
      <div className="ms-20 mt-32">
        <Nigeria />
      </div>
      <Customers />
      <div className="grid md:grid-cols-3 ps-20 pe-20 pb-10 gap-10 bg-[#EDF6FD] ">
        <Twitcard
          twitter={img_twitter}
          chip="Amina Ebele"
          handles=" @DeliciousAmina"
          words="I am now the unofficial @Printivo ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!"
        />
        <Twitcard
          twitter={img_twitter}
          chip="Oluwatosin"
          handles=" @tosingirlfx"
          words="@Printivo delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come."
        />
        <Twitcard
          twitter={img_twitter}
          chip="Oluwatosin"
          handles=" @olgablark"
          words="These guys @Printivo are really awesome and affordable. Excellent customer service and delivery too. Thank you."
        />
      </div>
      <Count />
      <div className="grid md:grid-cols-3 ms-20 me-20 pb-20 gap-20">
        <CountComponents
          img={clock}
          headings="Fast Turnaround Within Days"
          para="Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct."
        />
        <CountComponents
          img={shed2}
          headings="100% Top Quality"
          para="Only the finest materials, machines and people will be involved in fulfilling your order."
        />
        <CountComponents
          img={wallet}
          headings="Affordable Services"
          para="All products are adequately priced to ensure you get value for your money at all times."
        />
      </div>
      <Amazing />
      <div className="h-50 bg-[#ece8d9]">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 justify-items-center ms-20 me-20 pb-20 gap-5">
          <AmazingComp logo={techcrunch} read="Read the article here" />
          <AmazingComp logo={forbes} read="Read the article here" />
          <AmazingComp logo={techpoint} read="Read the article here" />
          <AmazingComp logo={techcacbal} read="Read the article here" />
          <AmazingComp logo={cnn} read="Read the article here" />
        </div>
      </div>
      <Sponsor />
      <div className="h-50 bg-[#384A62]">
        <div className="gird md:grid-cols-4">
          {/* <SponComps list={Printivo} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
