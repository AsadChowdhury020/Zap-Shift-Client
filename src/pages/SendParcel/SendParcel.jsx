import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((sc) => sc.region);
  const regions = [...new Set(regionsDuplicate)];
  // console.log(regions)

  const senderRegion = watch("senderRegion");
  const senderCA = watch("senderDistrict");

  const districtsByRegion = (region) => {
    const regionDistrict = serviceCenter.filter((sc) => sc.region === region);
    const districts = regionDistrict.map((rd) => rd.district);
    return districts;
  };

  const serviceAreaByDistrict = (district) => {
    const districtMatch = serviceCenter.find(sc => sc.district === district);
    return districtMatch ? districtMatch.covered_area : []
  };

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="text-black">
      <h3 className="text-5xl font-extrabold my-5">Add Parcel</h3>
      <h3 className="text-3xl font-extrabold">Enter your parcel details</h3>

      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="my-10 p-4"
        action=""
      >
        {/* Parcel type */}
        <div className="">
          <label className="label text-xl mr-5">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label text-xl">
            <input
              type="radio"
              {...register("parcelType")}
              value="not-document"
              className="radio"
              // defaultChecked
            />
            Not-Document
          </label>
        </div>
        <hr className="my-10" />
        {/* Parcel  Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <fieldset>
            {/* Parcel Name  */}
            <label className="label text-xl my-3">Parcel Name</label>
            <input
              type="text"
              // {...register("email", { required: true })}
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
            {/* {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )} */}
          </fieldset>
          <fieldset>
            {/* Parcel Weight  */}
            <label className="label text-xl my-3">Parcel Weight (Kg)</label>
            <input
              type="number"
              // {...register("email", { required: true })}
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* Sender & Receiver  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Sender Details  */}
          <div>
            <h1 className="text-xl font-extrabold">Sender Details</h1>
            <fieldset>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  {/* Sender Name  */}
                  <label className="label text-xl my-3">Sender Name</label>
                  <input
                    type="text"
                    {...register("senderName")}
                    className="input w-full"
                    placeholder="Sender Name"
                  />
                  {/* Sender Address  */}
                  <label className="label text-xl my-3">Sender Address</label>
                  <input
                    type="text"
                    {...register("senderAddress")}
                    className="input w-full"
                    placeholder="Sender Address"
                  />
                </div>
                <div>
                  {/* Sender Email */}
                  <label className="label text-xl my-3">Sender Email</label>
                  <input
                    type="email"
                    {...register("senderEmail")}
                    className="input w-full"
                    placeholder="Sender email"
                  />
                  {/* Sender Contact No  */}
                  <label className="label text-xl my-3">
                    Sender Contact No
                  </label>
                  <input
                    type="tel"
                    {...register("senderSenderContactNo")}
                    className="input w-full"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
              </div>
              {/* Sender Region  */}
              <label className="label text-xl my-3">Sender Region</label>
              <select
                {...register("senderRegion")}
                className="select select-bordered w-full appearance-none"
              >
                <option value="">Select Region</option>
                {regions.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {/* Sender District  */}
              <label className="label text-xl my-3">Sender District</label>
              <select
                {...register("senderDistrict")}
                className="select select-bordered w-full appearance-none"
              >
                <option value="">Select District</option>
                {districtsByRegion(senderRegion).map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              {/* Sender Covered Area  */}
              <label className="label text-xl my-3">Sender Covered Area</label>
              <select
                {...register("senderCoveredArea")}
                className="select select-bordered w-full appearance-none"
              >
                <option value="">Select Covered Area</option>
                {serviceAreaByDistrict(senderCA).map((cA, index) => (
                  <option key={index} value={cA}>
                    {cA}
                  </option>
                ))}
              </select>
              {/* Pickup Instruction  */}
              <label className="label text-xl my-3">Pickup Instruction</label>
              <textarea
                {...register("senderPickupInstruction")}
                className="textarea w-full"
                placeholder="Pickup Instruction"
              />
            </fieldset>
          </div>
          {/* Receiver Details  */}
          <div>
            <h1 className="text-xl font-extrabold">Receiver Details</h1>
            <fieldset>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  {/* Receiver Name  */}
                  <label className="label text-xl my-3">Receiver Name</label>
                  <input
                    type="text"
                    {...register("receiverName")}
                    className="input w-full"
                    placeholder="Receiver Name"
                  />
                  {/* Receiver Name  */}
                  <label className="label text-xl my-3">Receiver Address</label>
                  <input
                    type="text"
                    {...register("receiverAddress")}
                    className="input w-full"
                    placeholder="Receiver Address"
                  />
                </div>
                <div>
                  {/* Receiver Pickup Wire house  */}
                  <label className="label text-xl my-3">Receiver email</label>
                  <input
                    type="email"
                    {...register("receiverEmail")}
                    className="input w-full"
                    placeholder="Receiver email"
                  />
                  {/* Sender Contact No  */}
                  <label className="label text-xl my-3">
                    Receiver Contact No
                  </label>
                  <input
                    type="tel"
                    {...register("receiverContactNo")}
                    className="input w-full"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
              </div>
              {/* Sender Region  */}
              <label className="label text-xl my-3">Receiver Region</label>
              <select
                {...register("receiverRegion")}
                className="select select-bordered w-full appearance-none"
              >
                <option value="">Select Region</option>
                {regions.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {/* Pickup Instruction  */}
              <label className="label text-xl my-3">Delivery Instruction</label>
              <textarea
                {...register("deliveryInstruction")}
                className="textarea w-full"
                placeholder="Delivery Instruction"
              />
            </fieldset>
          </div>
        </div>
        <p className="text-red-500 text-xl my-10">
          * PickUp Time 4pm-7pm Approx.
        </p>
        <input
          type="submit"
          value="Proceed to Confirm Booking"
          className="btn btn-primary text-black w-full"
        />
      </form>
    </div>
  );
};

export default SendParcel;
