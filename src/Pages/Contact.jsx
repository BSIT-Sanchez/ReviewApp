import Layout from "../Layout/Layout";
import { AiOutlineMail, AiOutlinePhone, AiOutlineGlobal } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div className="grid md:grid-cols-4 grid-cols-1 justify-items-center gap-4 mb-[4rem]">
       {/* Left Side */}
        <div className="col-span-1 flex flex-col justify-center items-center pl-10 order-last md:order-first">
        <h1 className="md:text-[72px] text-[50px] text-nowrap md:text-wrap font-extrabold text-center text-[#FF5900] leading-[1] mt-[4rem]">
            Get In Touch.
        </h1>

        <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
            <AiOutlineMail className="text-4xl text-[#FF5900] w-[41px] h-[36.18px]" />
            <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold text-[#FF5900]">Email</h2>
                <p>teacher@gmail.com</p>
            </div>
            </div>

            <div className="flex items-center gap-4">
            <AiOutlinePhone className="text-4xl text-[#FF5900] w-[41px] h-[36.18px]" />
            <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold text-[#FF5900]">Phone</h2>
                <p>+63000-0000-000</p>
            </div>
            </div>

            <div className="flex items-center gap-4">
            <AiOutlineGlobal className="text-4xl text-[#FF5900] w-[41px] h-[36.18px]" />
            <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold text-[#FF5900]">Website</h2>
                <p>www.supsofttech.com</p>
            </div>
            </div>

            <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-4xl text-[#FF5900] w-[41px] h-[36.18px]" />
            <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold text-[#FF5900]">Location</h2>
                <p>123 Anywhere St. Cainta, Rizal</p>
            </div>
            </div>
        </div>
        </div>


       {/* Right Side with Form */}
    <div className="col-span-3 bg-[#ece7e7] border border-[#A33900] p-8 rounded-lg shadow-lg mt-[4rem] md:w-[70%] w-[95%]">
    <form className="w-full">
        <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
            <label className="block text-[#A33900] font-semibold">First Name:</label>
            <input
            type="text"
            placeholder=""
            className="w-full p-3 mt-2 rounded-md border-[#A33900] border"
            />
        </div>
        <div className="w-full md:w-1/2">
            <label className="block text-[#A33900] font-semibold">Last Name:</label>
            <input
            type="text"
            placeholder=""
            className="w-full p-3 mt-2 rounded-md border-[#A33900] border"
            />
        </div>
        </div>
        <div>
        <label className="block text-[#A33900] font-semibold mt-4">Email:</label>
        <input
            type="email"
            placeholder=""
            className="w-full p-3 mt-2 rounded-md border-[#A33900] border"
        />
        </div>
        <div>
        <label className="block text-[#A33900] font-semibold mt-4">Message:</label>
        <textarea
            placeholder=""
            className="w-full p-3 mt-2 rounded-md border-[#A33900] border"
            rows="5"
        ></textarea>
        </div>
        <div className="flex justify-center mt-4">
        <button
            type="submit"
            className="bg-[#FF5900] text-white py-2 px-8 rounded-md font-bold hover:bg-[#FF5900] transition duration-300"
        >
            Submit
        </button>
        </div>
    </form>
    </div>

      </div>
    </Layout>
  );
};

export default Contact;
