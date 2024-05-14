import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend,BiPhoneCall,BiSupport} from 'react-icons/bi'
const Contact=()=> {
  return (
    <Layout>
     <div className='row contactus'>
      <div className='col-md-6'>
      <img
          src="images/contactUs.png"
          alt='contactUs'
          style={{width:'100%', height:'100%'}}
          />
      </div>
      <div className='col-md-4'>
        <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
        <p className='text-justify mt-2'>
          Any queries? Feel free to call 24x7
        </p>
        <p className='mt-3'>
          <BiMailSend/> : help@shopnest.com
        </p>
        <p className='mt-3'>
          <BiPhoneCall/> : 8066-2541932
        </p>
        <p className='mt-3'>
          <BiSupport/> : 1800-1234-5678
        </p>
      </div>
     </div>
    </Layout>
  );
}

export default Contact
