import React from 'react';
import contactUs from '../assets/img/contactUs.png';
import Navbar from '../components/core/Home/Navbar';
import Footer from '../components/core/Footer';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-start p-4 gap-x-8 mx-auto max-w-6xl bg-white font-poppins">
        <div className="w-full md:w-1/2 flex flex-col justify-between mb-8 md:mb-0">
          <h1 className="text-gray-800 text-3xl font-extrabold font-poppins">
            Need support?
          </h1>
          <p className="text-sm text-gray-500 mt-4">
            Fill in the form to get in touch.
          </p>
          <div className="mt-8 w-full h-[300px] md:h-[500px]">
            <img
              src={contactUs}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <form className="ml-auto space-y-4 w-full md:w-1/2 flex flex-col justify-between rounded-lg md:p-0">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
            <div className="w-full md:w-1/2">
              <label className="font-lato font-bold text-[#424955]">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                required
                className="pr-4 pl-4 py-2.5 text-base bg-[#F3F4F6] text-black rounded-lg focus:bg-white focus:ring-[#636AE8] w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="font-lato font-bold text-[#424955]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                required
                className="pr-4 pl-4 py-2.5 text-base bg-[#F3F4F6] text-black rounded-lg focus:bg-white focus:ring-[#636AE8] w-full"
              />
            </div>
          </div>
          <div>
            <label className="font-lato font-bold text-[#424955]">Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              className="pr-4 pl-4 py-2.5 text-base bg-[#F3F4F6] text-black rounded-lg focus:bg-white focus:ring-[#636AE8] w-full"
            />
          </div>
          <div>
            <label className="font-lato font-bold text-[#424955]">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              required
              className="pr-4 pl-4 py-2.5 text-base bg-[#F3F4F6] text-black rounded-lg focus:bg-white focus:ring-[#636AE8] w-full"
            />
          </div>
          <div>
            <label className="font-lato font-bold text-[#424955]">
              Message
            </label>
            <textarea
              placeholder="Message"
              rows="6"
              required
              className="pr-4 pl-4 py-2.5 text-base bg-[#F3F4F6] text-black rounded-lg focus:bg-white focus:ring-[#636AE8] w-full"
            ></textarea>
          </div>
          <div>
            <label className="font-lato font-bold text-[#424955]">
              How would you like us to contact you?
            </label>
            <select className="pr-4 pl-4 py-2.5 text-base bg-[#F3F4F6] text-black rounded-lg focus:bg-white focus:ring-[#636AE8] w-full">
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="no_preference">No preference</option>
            </select>
          </div>

          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full mt-6"
          >
            Send
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
