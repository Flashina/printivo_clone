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
// import img6 from "../assets/images/6.png";
// import img7 from "../assets/images/7.png";
// import img8 from "../assets/images/8.png";
// import img9 from "../assets/images/9.png";
// import img10 from "../assets/images/10.png";
// import img11 from "../assets/images/11.png";
// import img12 from "../assets/images/12.jpeg";
// import img13 from "../assets/images/13.png";
// import img14 from "../assets/images/14.png";
// import img15 from "../assets/images/15.png";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Shop />
      <Popular />
      <div className="grid md:grid-cols-4 gap-4 me-20 ms-20 mt-5">
        <Card img={img} title="Two-sided Business Cards" />
        <Card img={img2} title="A5 flyers (Single Sided)" />
        <Card img title='Round Stickers (3.5" Diameter)' />
        <Card title="Simple Mugs" />
        <Card title="Postcards (A6)" />
        <Card title="Roll Up Banners (Big Base)" />
        <Card title="A2 Posters" />
        <Card title="Trifold Brochures" />
        <Card title="Landscape ID Cards" />
        <Card title="Off White T-shirts" />
        <Card title="A4 Branded Paper Bags" />
        <Card title="A4 Courier Bags" />
      </div>
    </>
  );
};

export default App;
