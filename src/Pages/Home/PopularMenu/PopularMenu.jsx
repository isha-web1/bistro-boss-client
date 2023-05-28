import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/Footer/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })
    },[])

    return (
        <section className='mb-12'>
           <SectionTitle
           heading={"From Our Menu"}
           subHeading={"Popular Items"}
           >
            </SectionTitle> 
            <div className='grid md: grid-cols-2 gap-4'>
                {
                    menu.map(item => <MenuItem 
                        key={item._item}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mt-6 '>
            <button className='border-b-4 decoration-slate-600'>view full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;