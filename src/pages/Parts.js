import React from 'react';
import { PartsList } from "../helpers/PartsList";
import PartsItem from '../components/PartsItem';
import "../styles/Parts.css";

function Parts() {
    return (
        <div className='parts'>
            <h2 className='partsTitle'>The offered parts by our partners are displayed below</h2>
            {/* <h1 className='partsTitle'>Brake discs & Pads & Brake Fluid</h1>
            <h1 className='partsTitle'>Clutches & Transmissions </h1>
            <h1 className='partsTitle'>Fuel filters & Rails & Injectors </h1> */}
            <div className='partsList'>
                {PartsList.map((partItem, key) => {
                    return (
                        <PartsItem
                            key={key}
                            image={partItem.image}
                            name={partItem.name}
                            price={partItem.price} />
                    );
                })}
            </div>
        </div>
    );
}

export default Parts
