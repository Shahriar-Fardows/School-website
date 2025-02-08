import { Link } from "react-router-dom";
import images from "../assets/images";
import Announcement from "../Components/Announcement/Announcement";

const Navbar = () => {

    const navLinks = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Home</Link></li>
    </>
        
    return (
        <>
            <Announcement />
            <nav className="flex items-center justify-between px-[5%]">
                <Link to='/'>
                <div>
                    <img className="h-20" src={images?.image?.logo} alt="logo" />
                </div>
                </Link>
                <div>
                    <ul className="flex gap-16">
                       {navLinks}
                    </ul>
                </div>
                <div>
                <Link to='/'><button className="bg-[#0FA35E] hover:bg-[#f3b815] google-font-L font-bold text-white mx-2 py-2 px-5 ">Student Portal</button></Link>
                <Link to='/'><button className="bg-[#0FA35E] p-5">Student Portal</button></Link>

                </div>

            </nav>
            
        </>
    );
};

export default Navbar;