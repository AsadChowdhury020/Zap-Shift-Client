import React from 'react';
import bookingImage from '../../../assets/bookingIcon.png'

const HowItWorks = () => {
    return (
        <div className='my-10'>
            <h3 className='font-extrabold text-3xl mb-8'>How it Works</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='bg-[#FFFFFF] rounded-3xl p-8 shadow-2xl'>
                    <img src={bookingImage} alt="" />
                    <h3 className='font-bold text-2xl'>Booking Pick & Drop</h3>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>                   
                </div>
                <div className='bg-[#FFFFFF] rounded-3xl p-8 shadow-2xl'>
                    <img src={bookingImage} alt="" />
                    <h3 className='font-bold text-2xl'>Cash On Delivery</h3>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>                   
                </div>
                <div className='bg-[#FFFFFF] rounded-3xl p-8 shadow-2xl'>
                    <img src={bookingImage} alt="" />
                    <h3 className='font-bold text-2xl'>Delivery Hub</h3>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>                   
                </div>
                <div className='bg-[#FFFFFF] rounded-3xl p-8 shadow-2xl'>
                    <img src={bookingImage} alt="" />
                    <h3 className='font-bold text-2xl'>Booking SME & Corporate</h3>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>                   
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;