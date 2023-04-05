const Forms = {
  poster: [
    {
      title: "POSTER MAKING COMPETITION",
      describe: "",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/wabathon.png?updatedAt=1680496248059",
      link: "",
    },
  ],
  logo: [
    {
      title: "POSTER MAKING COMPETITION",
      describe: "",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/wabathon.png?updatedAt=1680496248059",
      link: "",
    },
  ],
};
const FormsCards = () => {
  return (
    <div className="bg-home-background h-screen bg-cover flex flex-row flex-wrap justify-center pt-16 ">
      {Object.entries(Forms).map((item, i) => {
        return (
          <div
            className="flex flex-col gap-8 justify-center items-center p-8 cursor-pointer hover:scale-105"
            key={i}
          >
            <div className="flex gap-5 flex-wrap justify-center items-center">
              {item[1].map((value, index) => {
                return (
                  <a href={value.link}>
                    <div
                      className="card w-full h-[20rem] bg-base-100 shadow-xl"
                      key={index}
                    >
                      <figure>
                        <img
                          src={value.image}
                          alt="Shoes"
                          className="object-cover"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title justify-center text-2xl ">
                          {value.title}
                        </h2>
                        <p className="text-justify font-semibold text-white">
                          {value.describe}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormsCards;
