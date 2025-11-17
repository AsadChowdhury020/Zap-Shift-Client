import React from "react";

const AboutUs = () => {
  return (
    <div className="p-25 shadow-2xl">
      <h1 className="text-5xl font-extrabold">About Us</h1>
      <p className="w-1/2">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* Tabs  */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift my-5">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-bold text-[20px]"
          aria-label="Story"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p>
            We began with a simple vision: to make parcel delivery fast,
            reliable, and stress-free. Over time, our dedication to real-time
            tracking, efficient logistics, and exceptional customer service has
            transformed us into a trusted partner for thousands of users. From
            sending personal gifts to managing critical business shipments, we
            ensure every package arrives safely and on time. By combining
            advanced technology with a passionate team, we continuously innovate
            to improve the delivery experience. Our goal is to make sending and
            receiving parcels seamless, convenient, and worry-free, turning
            everyday deliveries into a smooth and reliable process.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-bold text-[20px]"
          aria-label="Mission"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p>
            Our success is measured by the trust and satisfaction of our
            customers. Thousands of deliveries are completed daily, and each one
            reflects our commitment to reliability, speed, and excellence. From
            personal packages to large-scale business shipments, we take pride
            in our consistent performance and ability to meet customer
            expectations. By continually refining our processes and embracing
            innovative solutions, we have built a reputation as a dependable
            delivery partner. Every successful delivery is a testament to our
            dedication to connecting people and businesses efficiently, safely,
            and on time.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-bold text-[20px]"
          aria-label="Success"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p>
            Our success is measured by the trust and satisfaction of our
            customers. Thousands of deliveries are completed daily, and each one
            reflects our commitment to reliability, speed, and excellence. From
            personal packages to large-scale business shipments, we take pride
            in our consistent performance and ability to meet customer
            expectations. By continually refining our processes and embracing
            innovative solutions, we have built a reputation as a dependable
            delivery partner. Every successful delivery is a testament to our
            dedication to connecting people and businesses efficiently, safely,
            and on time.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-bold text-[20px]"
          aria-label="Team & Others"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p>
            Our team is the backbone of our project. Comprising passionate
            developers, logistics experts, designers, and customer support
            professionals, we work together to ensure every parcel reaches its
            destination efficiently and safely. Each team member brings a unique
            skill set, from building seamless tracking systems and user-friendly
            apps to optimizing delivery routes and ensuring customer
            satisfaction.
          </p>
          <br />
          <p>
            Beyond the core team, we are supported by our network of delivery
            partners, technology collaborators, and advisory mentors. Together,
            they help us innovate, scale operations, and maintain high-quality
            standards in every aspect of our service.
          </p>
          <br />
          <p>
            We also value our users as part of our extended team. Their
            feedback, suggestions, and trust drive our continuous improvement
            and innovation. By fostering a collaborative ecosystem, we ensure
            that every stakeholder—team members, partners, and customers
            alike—shares in our success and mission of delivering excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
