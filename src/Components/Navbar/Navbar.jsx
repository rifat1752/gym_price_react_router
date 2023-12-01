import { useState } from "react";
import Link from "./Link";
import { IoMdMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";


const Navbar = () => {
    const [open, setOpen]=useState(false)
   
    const Clicked =()=>{
        setOpen(!open);
        
    }
    const routes = [
        {
          "id": 1,"path": "/home", "name": "Home"
        },
        {
          "id": 2, "path": "/about", "name": "About Us"
        },
        {
          "id": 3, "path": "/services", "name": "Services"
        }, 
        {
          "id": 4, "path": "/contact", "name": "Contact"
        }
      ]
      
    return (
        <nav className={`md:flex md:justify-end  md:h-16 bg-slate-900   bg-opacity-80 items-center ${open === true?'h-40':''}`}>
            <div className="md:hidden " onClick={Clicked}>{open===true?<FaWindowClose className=" text-4xl text-yellow-300 cursor-pointer " />:<IoMdMenu className="text-4xl text-yellow-300 cursor-pointer " /> }
            </div>
            <div className= {`w-36 md:w-auto  flex flex-col md:flex-row bg- bg-opacity-80 md:bg-opacity-0 absolute md:static ${open === true?'top-4 left-[40%]':'-top-96'} `}>
            {
                routes.map(route=> <Link  key={route.id} route={route}></Link>)
            }
            </div>
        </nav>
    );
};

export default Navbar;