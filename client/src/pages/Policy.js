import React from 'react'
import Layout from '../components/Layout/Layout'
const Policy = () => {
  return (
    <Layout>
      <div className="row privpol">
        <div className="col-md-6 ">
          <img
            src="/images/privacy-policy.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4"> 
        Privacy Policy: <br/>
        At ShopNest, we prioritize the privacy and security of our users. 
        Here's a concise overview of how we handle your information:<br/>
        Information Collection: 
        We collect personal information like name, email, and address 
        when you create an account or make a purchase.<br/>
        Usage:
        Your information is used to process orders,personalize 
        your experience,and communicate with you about products and 
        updates.<br/>
        Protection:
        We employ industry-standard security measures to safeguard 
        your data from unauthorized access or disclosure.<br/>
        Sharing: 
        We may share your information with trusted third-party service 
        providers to facilitate transactions or improve our services. 
        Your data will never be sold to third parties.<br/>
        Consent: 
        By using ShopNest, you consent to the collection and 
        use of your information as outlined in this policy.
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
