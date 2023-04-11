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
                    className="card w-60 h-[24rem] bg-base-100 hover:scale-110 transition-all ease-in-out duration-300"
                    key={index}
                  >
                    <figure>
                      <img
                        src={value.image}
                        alt="coordinator_image"
                        className=" object-fill"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="flex flex-row items-center gap-2">
                        <HiUser />
                        <p className="text-sm">{value.name}</p>
                      </div>

                      <div className="flex flex-row items-center ">
                        <HiOutlineMail />
                        <p className="text-sm">{value.email}</p>
                      </div>

                      {value.show && (
                        <div className="flex flex-row items-center gap-2">
                          <HiPhone />
                          <p className="text-sm">{value.contact}</p>
                        </div>
                      )}
                      <div className="flex flex-row items-center gap-2">
                        <p className="text-sm">{value.post}</p>
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
