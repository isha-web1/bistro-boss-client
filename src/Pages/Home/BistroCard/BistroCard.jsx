import React from "react";
import chef from '../../../assets/home/chef-service.jpg'

const BistroCard = () => {
  return (
    <div
      className="hero bg-fixed h-[572px] mb-8"
      style={{
        backgroundImage: `url("${chef}")`,
      }}
    >
      <div className="hero-overlay  "></div>
      <div className="hero-content text-center bg-white mx-24 my-10 px-40 py-16 ">
        <div className="max-w-md  ">
          <h1 className="mb-5 text-5xl  uppercase">Bistro Boss</h1>
          <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default BistroCard;
