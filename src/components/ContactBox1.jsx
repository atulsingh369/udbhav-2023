import { HiOutlineMail, HiPhone } from "react-icons/hi";

const Department = {
  Department1: [
    {
      name: "Abhishek kant",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k191.jpg?updatedAt=1680525639131",
      contact: 123456789,
      email: "test@test.test",
      show: true,
    },
    {
      name: "Abhishek kant",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k191.jpg?updatedAt=1680525639131",
      contact: 123456789,
      email: "test@test.test",
      show: true,
    },
    {
      name: "Abhishek kant",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k191.jpg?updatedAt=1680525639131",
      contact: 123456789,
      email: "test@test.test",
      show: true,
    },
  ],
  Department2: [
    {
      name: "Abhishek kant",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k191.jpg?updatedAt=1680525639131",
      contact: 123456789,
      email: "test@test.test",
      show: true,
    },
    {
      name: "Abhishek kant",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k191.jpg?updatedAt=1680525639131",
      contact: 123456789,
      email: "test@test.test",
      show: true,
    },
    {
      name: "Abhishek kant",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k191.jpg?updatedAt=1680525639131",
      contact: 123456789,
      email: "test@test.test",
      show: true,
    },
  ],
  Department3: [
    {
      name: "Abhishek kant",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k191.jpg?updatedAt=1680525639131",
      contact: 123456789,
      email: "test@test.test",
      show: true,
    },
    {
      name: "Abhishek kant",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k191.jpg?updatedAt=1680525639131",
      contact: 123456789,
      email: "test@test.test",
      show: true,
    },
    {
      name: "Abhishek kant",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/udbhav2k191.jpg?updatedAt=1680525639131",
      contact: 123456789,
      email: "test@test.test",
      show: true,
    },
  ],
};

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
                      <h2 className="card-title text-sm">{value.name}</h2>
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
