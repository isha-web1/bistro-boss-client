import React from "react";
import MenuItem from "../../Shared/Footer/MenuItem/MenuItem";
import Cover from "../../Menu/Menu/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({items,title,  img}) => {
  console.log(title)
  return (
    <div className="pt-8">
        {title && <Cover img={img} title={title}></Cover> }
        
      <div className="grid md: grid-cols-2 gap-10 mt-16">
        {items && items.map((item) => (
          <MenuItem  item={item}></MenuItem>
        ))}
      </div>
      <Link to ={`/order/${title}`}>
      <button className="btn btn-outline border-0 border-b-4 mt-4">order now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
