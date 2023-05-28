import React from "react";
import MenuItem from "../../Shared/Footer/MenuItem/MenuItem";
import Cover from "../../Menu/Menu/Cover/Cover";

const MenuCategory = ({items,title,  img}) => {
    
  return (
    <div className="pt-8">
        {title && <Cover img={img} title='this is menu'></Cover> }
      <div className="grid md: grid-cols-2 gap-10 mt-16">
        {items && items.map((item) => (
          <MenuItem  item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
