import React from "react";
import product from "../Assets/data";
import Item from "../components/Item";
import { Link } from "react-router-dom";
import Title from "../components/Title";

function Kaftan() {
  return (
    <div className="mt-40">
      <div className="">
        <Title header="KAFTAN" />
      </div>
      <div className="grid grid-cols-4 gap-3 p-2 max-sm:grid-cols-1 max-sm:gap-10 max-sm:p-4 max-md:grid-cols-2 max-md:p-5 max-md:gap-8">
        {product.map((item, i) => {
          return <Item key={i} id={item.id} image={item.image} />;
        })}
      </div>
      <div className="flex justify-center">
        <Link to="./kaftan" className="btn">
          <button className="bg-black  text-white mt-10 pt-[30px] pb-[20px]   w-[300px] ">
            SEE MORE KAFTAN
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Kaftan;
