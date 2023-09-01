import React from "react";

const Team = () => {
  const person = [
    {
      name: "joshua",
      role: "Product Manager",
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      name: "joshua",
      role: "Product Manager",
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      name: "joshua",
      role: "Product Manager",
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      name: "joshua",
      role: "Product Manager",
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      name: "joshua",
      role: "Product Manager",
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  ];
  return (
    <div className="lg:px-16 md:px-10 px-5 md:py-10 py-4">
      <p className="text-4xl">
        Our Team<span className="text-blue-700">✸</span>
      </p>
      <section className="flex flex-wrap md:justify-start justify-center gap-10 py-10">
        {person.map((i, index) => (
          <div key={index} className="flex flex-col items-start gap-3">
            <img
              // style={{ borderRadius: "50px" }}
              className="md:w-[208px] w-[116px]  md:h-[255px] h-[140px] object-cover rounded-3xl md:rounded-[50px] "
              src={i.image}
              alt={i.name}
            />
            <p className="font-Manrope text-3xl capitalize">{i.name}</p>
            <p className="font-Manrope text-xl capitalize">{i.role}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Team;
