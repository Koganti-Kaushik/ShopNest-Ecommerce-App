import React from 'react'
import Layout from '../components/Layout/Layout'
const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutUs.png"
            alt="aboutus"
            style={{ width: "100%",height:'100%'}}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to ShopNest!<br/>
          At ShopNest, we're more than just an online marketplace-
          We're your ultimate destination for all things shopping. 
          With a passion for quality, convenience, and community, 
          we strive to redefine your shopping experience in the 
          digital age.<br/>
          What sets ShopNest apart is our unwavering commitment to 
          customer satisfaction.We prioritize transparency,security, 
          and reliability in everything we do, from our carefully 
          curated product selections and seamless checkout process.
          With ShopNest, you can shop with confidence, knowing that 
          your needs are our top priority.<br/>
          Thank you for choosing ShopNest – your trusted partner in online shopping!<br/>
          Happy Shopping,<br/>
          The ShopNest Team
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
