import { useEffect, useState } from "react";
import PriceOption from "./PriceOption";


const PriceOptions = () => {
    const [priceOptions,setPriceOptions] =useState([]);
    useEffect(()=>{
        fetch('option.json')
        .then(res =>res.json())
        .then(data =>setPriceOptions(data))
    },[])

    return (
        <div>
        {priceOptions.map(priceOption=> <PriceOption key={priceOption.id}  priceOption={priceOption}></PriceOption>)}
        </div>
    );
};

export default PriceOptions;