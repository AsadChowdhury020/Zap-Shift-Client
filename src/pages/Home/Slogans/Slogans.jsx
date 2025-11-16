import React from 'react';
import locationMerchantImage from '../../../assets/location-merchant.png'
import beAMerchantBgImage from '../../../assets/be-a-merchant-bg.png'
const Slogans = () => {
    return (
        <div className='my-10 bg-secondary text-[#FFFFFF] flex p-20 rounded-2xl bg-no-repeat' 
        style={{ backgroundImage: `url(${beAMerchantBgImage})` }}
        >
            <div>
                <h2 className='text-3xl font-extrabold mb-3'>Merchant and Customer Satisfaction <br /> is Our First Priority</h2>
                <p>We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.</p>
                <div className='mt-8 flex gap-6'>
                    <button className='bg-primary text-black rounded-full px-8 py-4'>Become a Merchant</button>
                    <button className='text-primary border rounded-full px-8 py-4'>Become a Merchant</button>
                </div>
            </div>
            <figure>
                <img src={locationMerchantImage} alt="" />
            </figure>
        </div>
    );
};

export default Slogans;