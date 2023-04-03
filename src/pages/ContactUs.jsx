import React from "react";
import Sidebar from "../components/Sidebar";
import ContactBox1 from "../components/ContactBox1";

const ContactUs = () => {
  return (
    <>
      <section className="h-full pt-16  flex flex-row justify-between ">
        <div>
          <Sidebar />
        </div>
        <div>
          <ContactBox1 />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
