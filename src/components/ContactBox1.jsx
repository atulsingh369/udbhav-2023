import { HiOutlineMail, HiPhone, HiUser } from "react-icons/hi";
import { Department } from "./Department";

const ContactBox1 = () => {
  return (
    <div className="bg-white flex-1 h-max">
      {Object.entries(Department).map((item, i) => {
        return (
          <div
            className="flex flex-col gap-8 justify-center items-center p-8"
            key={i}
          >
            <p className="text-xl font-bold">{item[0]}</p>
            <div className="flex gap-5 flex-wrap justify-center items-center">
              {item[1].map((value, index) => {
                return (
                  <div
                    className="card w-60 h-[24rem] bg-base-100 shadow-xl"
                    key={index}
                  >
                    <figure>
                      <img
                        src={value.image}
                        alt="Shoes"
                        className="object-contain"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="flex flex-row items-center gap-2">
                        <HiUser />
                        <p className="text-sm">{value.name}</p>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <HiPhone />
                        <p className="text-sm">{value.contact}</p>
                      </div>

                      {value.show && (
                        <div className="flex flex-row items-center gap-2">
                          <HiOutlineMail />
                          <p className="text-sm">{value.email}</p>
                        </div>
                      )}
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
