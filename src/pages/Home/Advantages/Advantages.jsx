import React from "react";
import liveTrackingImage from "../../../assets/live-tracking.png";
import safeDeliveryImage from "../../../assets/safe-delivery.png";
// import  from '../../../assets/live-tracking.png'

const Advantages = () => {
  return (
    <div>
      <hr className="border-t border-dotted border-secondary my-10" />
      <div className="bg-[#FFFFFF] shadow-2xl flex justify-between items-center gap-12 p-8 rounded-2xl my-6">
        <img src={liveTrackingImage} alt="" />
        <div class="divider divider-horizontal "></div>
        <div className="">
          <h3>Live Parcel Tracking</h3>
          <p>
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] shadow-2xl flex justify-between items-center gap-12 p-8 rounded-2xl my-6">
        <img src={safeDeliveryImage} alt="" />
        <div class="divider divider-horizontal "></div>
        <div className="">
          <h3>100% Safe Delivery</h3>
          <p>
            We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] shadow-2xl flex justify-between items-center gap-12 p-8 rounded-2xl my-6">
        <img src={safeDeliveryImage} alt="" />
        <div class="divider divider-horizontal "></div>
        <div className="">
          <h3>24/7 Call Center Support</h3>
          <p>
           Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
          </p>
        </div>
      </div>
      <hr className="border-t border-dotted border-secondary my-10" />
    </div>
  );
};

export default Advantages;
