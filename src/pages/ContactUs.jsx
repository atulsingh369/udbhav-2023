import React from "react";
import Sidebar from "../components/Sidebar";
import ContactBox1 from "../components/ContactBox1";
import TopBar from "../components/TopBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  return (
    <section className="h-full pt-16  flex flex-col lg:flex-row justify-between items-center lg:items-start ">
      <TopBar />
      <Sidebar />
      <ContactBox1 />
      <ToastContainer />
    </section>
  );
};

export default ContactUs;
