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
        <div className="mt-5">
            <div className="text-center text-4xl font-bold ">   Services </div>
            <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 bg-slate-300 ">
            {priceOptions.map(priceOption=> <PriceOption key={priceOption.id}  priceOption={priceOption}></PriceOption>)}
        </div>
            </div>
      
    );
};

export default PriceOptions;