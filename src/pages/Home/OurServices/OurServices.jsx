import React from 'react';
import serviceImage from '../../../assets/service.png'
const OurServices = () => {
    return (
        <div className='bg-secondary text-white my-10 py-25 rounded-2xl'>
            <h3 className='text-center font-extrabold text-4xl'>Our Services</h3>
            <p className='text-center my-8'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-25'>
                <div className='bg-[#FFFFFF] rounded-3xl p-6 flex flex-col items-center hover:bg-primary'>
                    <figure className='h-15 w-15 rounded-full bg-gray-100 flex justify-center items-center  '>
                        <img className='h-10 w-10 rounded-full' src={serviceImage} alt="" />
                    </figure>
                    <h3 className='text-2xl font-bold text-secondary text-center'>Express  & Standard Delivery</h3>
                    <p className='text-secondary'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='bg-[#FFFFFF] rounded-3xl p-6 flex flex-col items-center hover:bg-primary'>
                    <figure className='h-15 w-15 rounded-full bg-gray-100 flex justify-center items-center  '>
                        <img className='h-10 w-10 rounded-full' src={serviceImage} alt="" />
                    </figure>
                    <h3 className='text-2xl font-bold text-secondary text-center'>Nationwide Delivery</h3>
                    <p className='text-secondary'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>
                <div className='bg-[#FFFFFF] rounded-3xl p-6 flex flex-col items-center hover:bg-primary'>
                    <figure className='h-15 w-15 rounded-full bg-gray-100 flex justify-center items-center  '>
                        <img className='h-10 w-10 rounded-full' src={serviceImage} alt="" />
                    </figure>
                    <h3 className='text-2xl font-bold text-secondary text-center'>Fulfillment Solution</h3>
                    <p className='text-secondary'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>
                <div className='bg-[#FFFFFF] rounded-3xl p-6 flex flex-col items-center hover:bg-primary'>
                    <figure className='h-15 w-15 rounded-full bg-gray-100 flex justify-center items-center  '>
                        <img className='h-10 w-10 rounded-full' src={serviceImage} alt="" />
                    </figure>
                    <h3 className='text-2xl font-bold text-secondary text-center'>Cash on Home Delivery</h3>
                    <p className='text-secondary'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>
                <div className='bg-[#FFFFFF] rounded-3xl p-6 flex flex-col items-center hover:bg-primary'>
                    <figure className='h-15 w-15 rounded-full bg-gray-100 flex justify-center items-center  '>
                        <img className='h-10 w-10 rounded-full' src={serviceImage} alt="" />
                    </figure>
                    <h3 className='text-2xl font-bold text-secondary text-center'>Corporate Service / Contract In Logistics</h3>
                    <p className='text-secondary'>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                <div className='bg-[#FFFFFF] rounded-3xl p-6 flex flex-col items-center hover:bg-primary'>
                    <figure className='h-15 w-15 rounded-full bg-gray-100 flex justify-center items-center  '>
                        <img className='h-10 w-10 rounded-full' src={serviceImage} alt="" />
                    </figure>
                    <h3 className='text-2xl font-bold text-secondary text-center'>Parcel Return</h3>
                    <p className='text-secondary'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
                
            </div>
        </div>
    );
};

export default OurServices;