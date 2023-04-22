import { HiOutlineMail, HiPhone, HiUser } from "react-icons/hi";
import { Department } from "./Data";

const ContactBox1 = () => {
  return (
    <div className="bg-white flex-1 mt-5 lg:mt-0 h-max">
      {Object.entries(Department).map((item, i) => {
        return (
          <div
            className="flex flex-col gap-8 justify-center items-center p-8"
            key={i}
          >
            <p className="text-2xl font-bold pt-20" id={`${item[0]}`}>
              {item[0]}
            </p>
            <div className="flex gap-10 flex-wrap justify-center items-center">
              {/* Card */}
              {item[1].map((value, index) => {
                return (
                  <div
                    className="flex flex-col shadow-md shadow-gray-500 rounded-lg overflow-hidden w-60 h-[24rem] bg-base-100 hover:scale-110 transition-all ease-in-out duration-300"
                    key={index}>
                    <figure>
                      <img
                        src={value.image}
                        alt="coordinator_image"
                        className=" object-cover w-full h-[16rem]"
                      />
                    </figure>
                    <div className="flex flex-col items-start tracking-wider justify-center gap-1 h-full text-white">
                        <p className="text-sm mb-2 font-bold text-center w-full">{value.post}</p>
                      <div className="text-xs flex items-center justify-center">
                        <HiUser className="mx-2" />
                        {value.name}
                      </div>
                      <div className="text-xs flex items-center justify-center">
                        <HiOutlineMail className="mx-2" />
                        {value.email}
                      </div>
                      <div className="text-xs flex items-center justify-center">
                        <HiPhone className="mx-2" />
                        {value.contact}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactBox1;
